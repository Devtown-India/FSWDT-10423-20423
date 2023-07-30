const express = require('express')
const fs = require("fs/promises");
const uuid = require("uuid");
const bcrypt = require("bcryptjs");
const { generateToken } = require('../utils/auth');
const { addToDb } = require('../utils/');
const { User } = require('../db/models/User');

const router = express.Router()

router.post("/login", async (req, res) => {
    try {
      // validate the req body
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({
          message: "Please provide all required fields",
          success: false,
        });
      }
      // authenticate
      const user = await User.findOne({email})
      if (!user) {
        return res.json({
          message: "user not found",
          success: false,
        });
      }
      const hasValidPass = await bcrypt.compare(password, user.password);
      if (!hasValidPass) {
        return res.json({
          message: "incorrect password",
          success: false,
        });
      }
      const token = generateToken({
        email:user.email,
        id:user.id,
        username:user.username
      })
      return res.json({
        data: {
          token,
        },
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    }
  });
  
router.post("/signup", async (req, res) => {
    try {
      // validate the req body
      const { email, password, username } = req.body;
      const salt = await bcrypt.genSalt(10);
      console.log(salt);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = await User.create({
        email,
        username,
        password: hashedPassword,
      })
    
      return res.json({
        data: {
          ...newUser,
        },
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error",
        success: false,
        error: error.message,
      });
    }
  });


module.exports = router;