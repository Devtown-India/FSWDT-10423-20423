const express = require("express");
const { isAuthorised } = require("./middlewares");
const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/todo");

const PORT = 8080;
// expres instance
const app = express();
app.use(express.json());

app.use('/api/auth',authRoutes)
app.use('/api/todos',todoRoutes)


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
