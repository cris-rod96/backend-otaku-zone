import { Season } from "../../database/index.js";

export default deleteSeason = async (req, res) => {
  try {
    const { season_id } = req.params;
    const [rows, _] = await Season.update(
      { isDelete: false },
      {
        where: {
          id: season_id,
        },
      }
    );
    return rows > 0
      ? res.status(200).json({
          message: "Temporada eliminada con éxito",
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
