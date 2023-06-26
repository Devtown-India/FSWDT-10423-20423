const express = require("express");
const fs = require("fs/promises");
const uuid = require("uuid");

const PORT = 8080;
// expres instance
const app = express();

const logger = async (req, res, next) => {
  // do something
  const { headers, method, url, path, query } = req;
  console.log({
    headers,
    method,
    url,
    path,
    query,
  });
  next();
};

/// validate the token and if token is invalid then throw the error
const isAuthorised = async (req,res,next) => {
  try {
    const { token } = req.query;
    if (!token) {
      return res.status(401).json({ message: "Token is required" });
    }
    const users = await fs.readFile("./users.json", "utf-8");
    const parsedUsers = JSON.parse(users);
    const user = parsedUsers.find((user) => user.token === token);
    if (!user) {
      return res.status(401).json({ message: "invalid token" });
    }
    req.user = user;
    next()
  } catch (error) {
    return res.status(500).json({ message: "something went wrong" });
  }
};

app.use(express.json());
// app.use(logger);

app.get("/", (req, res) => {
  // console.log(req)

  res.status(200).send("SErver is running");
});

app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = uuid.v4();
    const user = {
      email,
      password,
      token,
    };
    const users = await fs.readFile("./users.json", "utf-8");
    const parsedUsers = JSON.parse(users);
    if (parsedUsers.find((user) => user.email === email)) {
      return res
        .status(409)
        .json({ message: "User with such email already exists" });
    }
    parsedUsers.push(user);
    await fs.writeFile("./users.json", JSON.stringify(parsedUsers));
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.get("/todos", isAuthorised,async (req, res) => {
  try {
    const {id,email} = req.user
// get the user id or email from the token and then get the todos of that user
    const { count = 10 } = req.query;
    console.log(req.user);
    const todos = await fs.readFile("./db.json", "utf-8");
    const parsedTodos = JSON.parse(todos);
    res.status(200).json(parsedTodos.slice(0, count));
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
