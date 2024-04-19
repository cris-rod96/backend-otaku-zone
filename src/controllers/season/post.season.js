import { Season } from "../../database/index.js";

export default createSeason = async (req, res) => {
  try {
    const data = req.body;
    await Season.create(data);
    return res.status(200).json({
      message: "Temporada añadida con éxito",
    });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};
