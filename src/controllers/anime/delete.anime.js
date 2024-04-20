import { Anime } from "../../database/index.js";

const deleteAnime = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows, _] = await Anime.update(
      { isDeleted: true },
      { where: { id } }
    );
    return rows > 0
      ? res.status(200).json({
          message: "Anime eliminado con éxito",
        })
      : res.status(304).json({ message: "Sin cambios registrados" });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

export default deleteAnime;
