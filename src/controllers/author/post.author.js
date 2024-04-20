import { Author } from "../../database/index.js";

const createAuthor = async (req, res) => {
  try {
    const data = req.body;
    await Author.create(data);
    return res.status(200).json({
      message: "El autor fue registrado con éxito",
    });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};
export default createAuthor;
