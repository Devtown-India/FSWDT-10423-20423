import express from "express";
import dotenv from "dotenv";
dotenv.config(path.join(path.resolve(), ".env"));

import path from "path";
import logger, { morganMiddleware } from "./logger";
const app = express();

app.use(morganMiddleware);

app.get("/", (req, res) => {
  try {
    res.send("hi");
    throw new Error("BROKEN");
  } catch (error) {
    logger.error(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  logger.info(`Server is running on port ${process.env.PORT}`);
});
