import { Anime } from "../../database/index.js";

export const updateAnime = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const [rows, _] = await Anime.update(data, { where: { id } });
    return rows > 0
      ? res.status(200).json({
          message: "Se ha actualizado la información del anime con éxito",
        })
      : res.status(304).json({ message: "Sin cambios registrados" });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};
