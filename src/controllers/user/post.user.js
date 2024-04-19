import { User } from "../../database/index.js";

export const registerUser = async (req, res) => {
  try {
    const data = req.body;
    const newUser = await User.create(data);
    return res.status(200).json(newUser);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};
