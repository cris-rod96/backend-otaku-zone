import { Comment } from "../../database/index.js";

const createComment = async (req, res) => {
  try {
    const data = req.body;
    await Comment.create(data);
    return res.status(200).json({
      message: "Comentario creado con éxito",
    });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

export default createComment;
