import { Comment } from "../../database/index.js";

const updateComment = async (req, res) => {
  try {
    const { id } = req.body;
    const data = req.body;
    const [rows, _] = await Comment.update(data, { where: { id } });
    return rows > 0
      ? res.status(200).json({
          message: "Comentario actualizado con éxito",
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
export default updateComment;
