import { Anime } from "../../database/index.js";

const createAnime = async (req, res) => {
  try {
    const data = req.body;
    const newAnime = await Anime.create(data);
    return res.status(200).json({
      message: "Se ha registrado un nuevo anime con éxito",
    });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

export default createAnime;
