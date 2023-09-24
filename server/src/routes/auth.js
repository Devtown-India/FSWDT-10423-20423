import express from "express";
import logger from "../utils/logger";
import { body, validationResult,param } from "express-validator";
import User from "../models/schemas/User";
import { generateAuthToken, generateResetToken, verifyPassword, verifyResetToken } from "../utils/auth";
const router = express.Router();

router.post(
  "/signup",
  body("firstName")
    .isLength({ min: 2 })
    .withMessage("First name must be at least 2 characters long"),
  body("lastName")
    .isLength({ min: 2 })
    .withMessage("Last name must be at least 2 characters long"),
  body("email").isEmail().withMessage("Please provide a valid email address"),
  body("password")
    .isLength({ min: 3 })
    .withMessage("Password must be at least 3 characters long"),
  async (req, res) => {
    try {
      const validation = validationResult(req);
      if (!validation.isEmpty()) {
        return res.json({
          success: false,
          message: "validation failed",
          errors: validation.array(),
        });
      }
      const { firstName, lastName, email, password } = req.body;
      const user = new User({
        firstName,
        lastName,
        email,
        password,
      });
      await user.save();
      return res.send({
        success: true,
        message: "User created successfully",
        data: user,
      });
    } catch (error) {
      logger.error(error);
      return res.json({
        successs: false,
        message: error.message,
        data: null,
      });
    }
  }
);

router.post(
  "/login",
  body("email").isEmail().withMessage("Please provide a valid email address"),
  body("password")
    .isLength({ min: 3 })
    .withMessage("Password must be at least 3 characters long"),
  async (req, res) => {
    try {
      const validation = validationResult(req);
      if (!validation.isEmpty()) {
        return res.json({
          success: false,
          message: "validation failed",
          errors: validation.array(),
        });
      }
      const { email, password } = req.body;
      const user = await User.findOne({ email }).select(
        "firstName lastName email _id password"
      );
      if (!user)
        return res.json({
          success: false,
          message: "Invalid email or password",
        });
      const validatePassword = await verifyPassword(password, user.password);
      if (!validatePassword)
        return res.json({
          success: false,
          message: "Invalid email or password",
        });
      const token = await generateAuthToken({
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        initials: user.initials,
      });
      return res.send({
        success: true,
        message: "token generated successfully",
        data: {
          token,
          user:{
            _id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            initials: user.initials,
          }
        },
      });
    } catch (error) {
      logger.error(error);
      return res.json({
        successs: false,
        message: error.message,
        data: null,
      });
    }
  }
);

router.post(
    "/forgot-password",
    body("email").isEmail().withMessage("Please provide a valid email address")
      .isLength({ min: 3 })
      .withMessage("Password must be at least 3 characters long"),
    async (req, res) => {
      try {
        const validation = validationResult(req);
        if (!validation.isEmpty()) {
          return res.json({
            success: false,
            message: "validation failed",
            errors: validation.array(),
          });
        }
        const { email } = req.body;
        const user = await User.findOne({ email }).select(
          "_id password"
        );
        if (!user)
          return res.json({
            success: false,
            message: "User not found",
          });
        const token = await generateResetToken({
            _id: user._id,
            email: user.email,
        })
        return res.send({
          success: true,
          message: "User created successfully",
          data: {
            token,
            resetPassLink:'link'
          },
        });
      } catch (error) {
        logger.error(error);
        return res.json({
          successs: false,
          message: error.message,
          data: null,
        });
      }
    }
  );


router.post(
    "/reset-password/:token",
    body("password").isLength({ min: 3 })
      .withMessage("Password must be at least 3 characters long"),
    param("token").isJWT().withMessage("Invalid token"),
    async (req, res) => {
      try {
        const validation = validationResult(req);
        if (!validation.isEmpty()) {
          return res.json({
            success: false,
            message: "validation failed",
            errors: validation.array(),
          });
        }
        const { password } = req.body;
        const { token } = req.params
        
        const validToken = await verifyResetToken(token)

        const {email} = validToken

        await User.findOneAndUpdate({
            email
        },{
            password
        })

        return res.send({
          success: true,
          message: "User created successfully",
          data: {
            success:true,
            message:'Password reset successfully'
          },
        });
      } catch (error) {
        logger.error(error);
        return res.json({
          successs: false,
          message: error.message,
          data: null,
        });
      }
    }
  );

export default router;
