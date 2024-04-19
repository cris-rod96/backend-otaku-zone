import { Author } from "../../database/index.js";

export default updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const [rows, _] = await Author.update(data, {
      where: {
        id,
      },
    });
    return rows > 0
      ? res.status(200).json({
          message: "La información del autor se actualizó con éxito",
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
