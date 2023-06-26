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

app.get("/todos", async (req, res) => {
  try {
    const { count = 10, token } = req.query;
    if (!token) {
      return res.status(401).json({ message: "Token is required" });
    }
    const users = await fs.readFile("./users.json", "utf-8");
    const parsedUsers = JSON.parse(users);
    if (!parsedUsers.find((user) => user.token === token)) {
      return res.status(401).json({ message: "invalid token" });
    }

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
