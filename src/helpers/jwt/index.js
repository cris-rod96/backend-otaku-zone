import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../../config/envs/index.js";

const generateToken = (payload) =>
  jwt.sign(payload, SECRET_KEY, { expiresIn: "7h" });
const verifyToken = (token) => jwt.verify(token, SECRET_KEY);

export default { generateToken, verifyToken };
