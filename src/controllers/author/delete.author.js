import { Author } from "../../database/index.js";

export default deleteAuthor = async (req, res) => {
  try {
    const { id, status } = req.params;
    const [rows, _] = await Author.update(
      {
        status,
      },
      { where: { id } }
    );
    return rows > 0
      ? res.status(200).json({
          message: "El autor ha sido eliminado con exi",
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
