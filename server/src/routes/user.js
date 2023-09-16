import express from "express";
import logger from "../utils/logger";
import { withAuth } from "../middleware/withAuth";
import User from "../models/schemas/User";
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select(
      "_id firstName lastName email followers following posts"
    ).populate([
        {
            path: 'following',
            select: '_id firstName lastName email',
        },
    ]).lean()
    // ! check if virtuals on json when sent to ui
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
        data: null,
      });
    }
    return res.json({
      success: true,
      message: "",
      data: user,
    });
  } catch (error) {
    logger.error(error);
    return res.json({
      successs: false,
      message: error.message,
      data: null,
    });
  }
});

router.post("/follow/:id", withAuth, async (req, res) => {
  try {
    // the user who is following
    // the user who is being followed
    //? if a user is already followed, show a message
    const {id} = req.params
    const userToFollow = await User.findById(id).select("_id");
    const { _id: userId } = req.user;
    if (!userToFollow) {
      return res.json({
        success: false,
        message: "User not found",
        data: null,
      });
    }
    // follow the user
    await User.findByIdAndUpdate(userId, {
      $addToSet: {
        following: userToFollow._id,
      },
    });
    // add the user to the followers list
    await User.findByIdAndUpdate(userToFollow._id, {
      $addToSet: {
        followers: userId,
      },
    });
    return res.json({
      success: true,
      message: "User followed successfully",
      data: null,
    });
  } catch (error) {
    logger.error(error);
    return res.json({
      successs: false,
      message: error.message,
      data: null,
    });
  }
});

router.post("/unfollow/:id", withAuth, async (req, res) => {
    try {
      // the user who is following
      // the user who is being followed
      //? if a user is already followed, show a message
      const {id} = req.params
      const userToFollow = await User.findById(id).select("_id");
      const { _id: userId } = req.user;
      if (!userToFollow) {
        return res.json({
          success: false,
          message: "User not found",
          data: null,
        });
      }
      // follow the user
      await User.findByIdAndUpdate(userId, {
        $pull: {
          following: userToFollow._id,
        },
      });
      // add the user to the followers list
      await User.findByIdAndUpdate(userToFollow._id, {
        $pull: {
          followers: userId,
        },
      });
      return res.json({
        success: true,
        message: "User unfollowed successfully",
        data: null,
      });
    } catch (error) {
      logger.error(error);
      return res.json({
        successs: false,
        message: error.message,
        data: null,
      });
    }
  });
  


export default router;
