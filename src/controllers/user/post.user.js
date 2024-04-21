import { User } from "../../database/index.js";
import { bcryptHelpers } from "../../helpers/index.js";

const registerUser = async (req, res) => {
  try {
    const data = req.body;
    data.password = await bcryptHelpers.hashPassword(data.password);
    const newUser = await User.create(data);
    return res.status(200).json(newUser);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

export default registerUser;
