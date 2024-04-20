import { Comment } from "../../database/index.js";

const deleteComment = async (req, res) => {
  try {
    const { id } = req.body;
    const [rows, _] = await Comment.update(
      { status: false },
      { where: { id } }
    );
    return rows > 0
      ? res.status(200).json({
          message: "Comentario eliminado con éxito",
        })
      : res.status(304).json({
          message: "Sin cambios detectados",
        });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

export default deleteComment;
