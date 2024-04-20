import { Season } from "../../database/index.js";

const getAllSeasons = async (req, res) => {
  try {
    const seasons = await Season.findAll({});
    return res.status(200).json(seasons);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

const getSeasonsByAnime = async (req, res) => {
  try {
    const { anime_id } = req.params;
    const seasons = await Season.findAll({
      where: {
        AnimeId: anime_id,
      },
    });

    return res.status(200).json(seasons);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

export default { getAllSeasons, getSeasonsByAnime };
