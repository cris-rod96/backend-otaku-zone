import { Season } from "../../database/index.js";

export default updateSeason = async (req, res) => {
  try {
    const { season_id } = req.params;
    const data = req.body;
    const [rows, _] = await Season.update(data, {
      where: {
        id: season_id,
      },
    });
    return rows > 0
      ? res.status(200).json({
          message: "Temporada actualizada con éxito",
        })
      : res.status(304).json({
          message: "Sin cambios registrados",
        });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};
