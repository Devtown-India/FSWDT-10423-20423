const express = require("express");
const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/todo");
const pageRoutes = require("./routes/pages");
const cors = require("cors");

const PORT = 8080;
// expres instance
const app = express();
app.use(cors())
app.use(express.json());

app.use('/api/auth',authRoutes)
app.use('/api/todos',todoRoutes)

app.use('/',pageRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
