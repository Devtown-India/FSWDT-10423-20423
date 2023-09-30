import express from "express";
import { withAuth } from "../middleware/withAuth";
import upload from "../utils/upload";
import axios from "axios";
const router = express.Router();

router.post("/", withAuth, upload.single("image"), async (req, res) => {
  // validate  title and body
  // make a req to upload.io
  try {
    console.log(req.body, "body");
  console.log(req.file, "file");
  const imageFile = req.file;
  const fileData = imageFile.buffer;
  const uploadIoResponse = await axios.post(
    `https://api.upload.io/v2/accounts/${process.env.UPLOAD_IO_ACCOUNT_ID}/uploads/binary`,
    fileData,
    {
      headers: {
        Authorization: `Bearer ${process.env.UPLOAD_IO_API_KEY}`,
      },
    }
  );
  console.log(uploadIoResponse.data);
  res.send("hi");
  } catch (error) {
    console.log(error.response.data)
  }
});

// like
// dislike
//delete
// update

export default router;
