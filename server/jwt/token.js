import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import config from "../config/config.js";
const generateToken = async (payload, res) => {
  const token = jwt.sign(payload, config.jwtSecret, {
    expiresIn: config.access_token_expire_time,
  });
  return token;
};
export default generateToken;
