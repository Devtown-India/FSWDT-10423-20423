import bcrypt from "bcryptjs";
import logger from "../logger";
import jwt from 'jsonwebtoken'

const hashPassword = async (password) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hash(password, salt);
  } catch (error) {
    logger.error(error);
    return null;
  }
};

const verifyPassword = async (password, hashedPassword) => {
    try {
      console.log({
          password,
          hashedPassword
      })
        return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
        logger.error(error);
        return false;
    }
}

const generateAuthToken = (payload)=> jwt.sign(payload, process.env.AUTH_JWT_SECRET, {expiresIn: '1d'})

const verifyAuthToken = (token)=> jwt.verify(token, process.env.AUTH_JWT_SECRET)

const generateResetToken = (payload)=>jwt.sign(payload, process.env.RESET_PASSWORD_JWT_SECRET, {expiresIn: 120})

const verifyResetToken = (token)=> jwt.verify(token, process.env.RESET_PASSWORD_JWT_SECRET)


export {
    hashPassword,
    verifyPassword,
    generateAuthToken,
    verifyAuthToken,
    generateResetToken,
    verifyResetToken
}