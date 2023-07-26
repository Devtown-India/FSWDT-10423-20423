import express from "express";
import randomRoutes from './routes/auth.js'
import { connectDB } from "./utils/db.js";


const app = express();

connectDB()

app.use('/random',randomRoutes)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
