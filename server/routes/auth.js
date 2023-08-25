const express = require('express')
const fs = require("fs/promises");
const uuid = require("uuid");
const bcrypt = require("bcryptjs");
const { generateToken, verifyToken } = require('../utils/auth');
const { addToDb } = require('../utils/');

const router = express.Router()

router.get("/validateToken/:token", (req, res) => {
  try {
    const {token} = req.params
    const decoded = verifyToken(token)
    if(!decoded) return res.status(400).json({
      message: "token invalid or expired",
      success: false,
    });
    return res.status(200).json({
      message: "token validated",
      data:decoded
    })
  } catch (error) {
    return res.status(400).json({
      message: "token invalid or expired",
      success: false,
    });
  }
})

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
      const users = await fs.readFile("./db/users.json", "utf8");
      const parsedUsers = JSON.parse(users);
      const user = parsedUsers.find((user) => user.email === email);
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
      if (!email || !password || !username) {
        return res.status(400).json({
          message: "Please provide all required fields",
          success: false,
        });
      }
      // check if user already exists
      const users = await fs.readFile("./db/users.json", "utf8");
      const parsedUsers = JSON.parse(users);
      if (parsedUsers.find((user) => user.email === email)) {
        return res.status(400).json({
          message: "User already exists",
          success: false,
        });
      }
      // validate the username
      if (parsedUsers.find((user) => user.username === username)) {
        return res.status(400).json({
          message: "Username already taken",
          success: false,
        });
      }
      // write to the DB
      const salt = await bcrypt.genSalt(10);
      console.log(salt);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = {
        id: uuid.v4(),
        email,
        username,
        password: hashedPassword,
      };
      await addToDb(newUser, "./db/users.json");
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
      });
    }
  });


module.exports = router;