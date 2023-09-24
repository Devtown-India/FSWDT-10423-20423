import express from "express";
import dotenv from "dotenv";
dotenv.config(path.join(path.resolve(), ".env"));

import path from "path";
import cors from "cors";
import authRoutes from './routes/auth'
import userRoutes from './routes/user'
import logger, { morganMiddleware } from "./utils/logger";
import { connectDB } from "./utils/db/inde";
const app = express();

connectDB()

app.use(
  cors()
)
app.use(morganMiddleware);
app.use(express.json())
app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)

app.get("/", (req, res) => {
  try {
    res.send("hi");
    throw new Error("BROKEN");
  } catch (error) {
    logger.error(error);
  }
});



app.listen(process.env.PORT, () => {
  logger.info(`Server is running on port ${process.env.PORT}`);
});
