const mongoose = require("mongoose");

const DB_URI = `mongodb://127.0.0.1:27017/fswd`;

module.exports.connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {});
    console.log("Connected to DB")
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
};
