const express = require("express");
const fs = require("fs/promises");
const uuid = require("uuid");
const bcrypt = require("bcryptjs");
const { addToDb } = require("./utils");
const { generateToken } = require("./utils/auth");
const { isAuthorised } = require("./middlewares");
const authRoutes = require("./routes/auth");

const PORT = 8080;
// expres instance
const app = express();
app.use(express.json());

// auth endpoints

app.use('/api/auth',authRoutes)

// app.post("/api/auth/login", async (req, res) => {
//   try {
//     // validate the req body
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({
//         message: "Please provide all required fields",
//         success: false,
//       });
//     }

//     // authenticate
//     const users = await fs.readFile("./db/users.json", "utf8");
//     const parsedUsers = JSON.parse(users);
//     const user = parsedUsers.find((user) => user.email === email);
//     if (!user) {
//       return res.json({
//         message: "user not found",
//         success: false,
//       });
//     }
//     const hasValidPass = await bcrypt.compare(password, user.password);
//     if (!hasValidPass) {
//       return res.json({
//         message: "incorrect password",
//         success: false,
//       });
//     }
//     const token = generateToken({
//       email:user.email,
//       id:user.id,
//       username:user.username
//     })
//     return res.json({
//       data: {
//         token,
//       },
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "Internal server error",
//       success: false,
//     });
//   }
// });

// app.post("/api/auth/signup", async (req, res) => {
//   try {
//     // validate the req body
//     const { email, password, username } = req.body;
//     if (!email || !password || !username) {
//       return res.status(400).json({
//         message: "Please provide all required fields",
//         success: false,
//       });
//     }
//     // check if user already exists
//     const users = await fs.readFile("./db/users.json", "utf8");
//     const parsedUsers = JSON.parse(users);
//     if (parsedUsers.find((user) => user.email === email)) {
//       return res.status(400).json({
//         message: "User already exists",
//         success: false,
//       });
//     }
//     // validate the username
//     if (parsedUsers.find((user) => user.username === username)) {
//       return res.status(400).json({
//         message: "Username already taken",
//         success: false,
//       });
//     }
//     // write to the DB
//     const salt = await bcrypt.genSalt(10);
//     console.log(salt);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     const newUser = {
//       id: uuid.v4(),
//       email,
//       username,
//       password: hashedPassword,
//     };
//     await addToDb(newUser, "./db/users.json");
//     return res.json({
//       data: {
//         ...newUser,
//       },
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "Internal server error",
//       success: false,
//     });
//   }
// });

// todo enpoints
app.get("/api/todos", isAuthorised ,async (req, res) => {
  try {
    console.log(req.user)
    return res.send('todos')
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
});


app.get("/todo/:id", (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
