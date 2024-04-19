import { Op } from "sequelize";
import { Anime } from "../../database/index.js";

const getAllAnimes = async (req, res) => {
  try {
    const animes = await Anime.findAll({ where: { isDeleted: false } });
    return res.status(200).json(animes);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

const getAnimeByID = async (req, res) => {
  try {
    const { id } = req.params;
    const anime = await Anime.findByPk(id);

    return anime
      ? res.status(200).json(anime)
      : res.status(404).json({
          error: "Anime no encontrado",
        });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

const getAnimeByName = async (req, res) => {
  try {
    const { name } = req.query;
    const animes = await Anime.findAll({
      where: {
        common_name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    return res.status(200).json(animes);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

export default { getAllAnimes, getAnimeByID, getAnimeByName };
