import express from "express";
import logger from "../utils/logger";
import { body, validationResult } from "express-validator";
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
  (req, res) => {
    try {
      const validation = validationResult(req);
      if(!validation.isEmpty()){
        return res.json({
            success: false,
            message:'validation failed',
            errors: validation.array()
        })
      }
      return res.send("hi");
    } catch (error) {
      logger.errr(error);
      return res.json({
        successs: false,
        message: error.message,
        data: null,
      });
    }
  }
);

export default router;
