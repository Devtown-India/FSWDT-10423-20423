import express from "express";
import { withAuth } from "../middleware/withAuth";
import upload from "../utils/upload";
import axios from "axios";
import fs from "fs";
import path from "path";
import Post from "../models/schemas/Post";
import FormData from "form-data";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const pageNumber = req.query._pageNumber || 1;
    const pageSize = req.query._pageSize || 20;
    const posts = await Post.find({
      deleted: false,
    })
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);
    return res.json({
      success: true,
      data: posts,
    });
    const count = await Post.countDocuments({
      deleted: false,
    })
  } catch (error) {
    console.log(error);
  }
});

router.get("/seed", async (req, res) => {
  // download 100 random images out of picusm
  try {
    await Post.deleteMany({});
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=10"
    );
    const downloadUrls = response.data.map((item) => item.download_url);
    const downdloadedBinaryData = await Promise.all(
      downloadUrls.map((url) => axios.get(url, { responseType: "arraybuffer" }))
    );

    const downloadedImageUrls = await Promise.all(
      downdloadedBinaryData.map((item) => {
        const randomString = Math.random().toString(20).substring(2, 15);
        const fileName = `${randomString}.jpg`;
        const fileData = item.data;
        fs.writeFile(
          path.join(path.resolve(), `/src/public/uploads/${fileName}`),
          fileData,
          (err) => {
            if (err) {
              console.log(err);
            }
          }
        );
        return "http://localhost:8080/image/" + fileName;
      })
    );
    const data = downloadedImageUrls.map((url) => {
      const randomString = Math.random().toString(20).substring(2, 15);
      const title = `${randomString}-title`;
      const description = `${randomString}-description`;
      return Post.create({
        title,
        description,
        image: url,
      });
    });

    await Promise.all(data);

    return res.json("done");
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

router.post("/", withAuth, upload.single("image"), async (req, res) => {
  try {
    console.log(req.body);
    const imageFile = req.file;
    const randomString = Math.random().toString(20).substring(2, 15);
    const fileData = imageFile.buffer;
    const fileName = `${randomString}-${imageFile.originalname}`;
    await fs.promises.writeFile(
      path.join(path.resolve(), `/src/public/uploads/${fileName}`),
      fileData
    );
    const imageUrl = "http://localhost:8080/image/" + fileName;
    const { title, description } = req.body;
    const post = await Post.create({
      title,
      description,
      image: imageUrl,
      user: req.user._id,
    });
    return res.json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.log(error);
  }
});

// router.post("/", withAuth, upload.single("image"), async (req, res) => {
//   // validate  title and body
//   // make a req to upload.io
//   try {
//     console.log(req.body, "body");
//   console.log(req.file, "file");
//   const imageFile = req.file;
//   const fileData = imageFile.buffer;
//   const uploadIoResponse = await axios.post(
//     `https://api.upload.io/v2/accounts/${process.env.UPLOAD_IO_ACCOUNT_ID}/uploads/binary`,
//     fileData,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.UPLOAD_IO_API_KEY}`,
//       },
//     }
//   );
//   console.log(uploadIoResponse.data);
//   res.send("hi");
//   } catch (error) {
//     console.log(error.response.data)
//   }
// });

// like
// dislike
//delete
// update

export default router;
