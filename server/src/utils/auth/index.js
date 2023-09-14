import bcrypt from "bcryptjs";
import logger from "../logger";

const hashPassword = async (password) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hash(password, salt);
  } catch (error) {
    logger.error(error);
    return null;
  }
};


export {
    hashPassword
}