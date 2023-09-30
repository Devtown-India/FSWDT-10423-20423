import { verifyAuthToken } from "../utils/auth";

export const withAuth = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    if (!token) {
      return res.json({
        success: false,
        message: "Token is required",
        data: null,
      });
    }
    const decodedToken = verifyAuthToken(token);
    req.user = decodedToken;
    next()
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid token",
      data: null,
    });
  }
};
