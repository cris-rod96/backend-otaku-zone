import { Op } from "sequelize";
import { Studio } from "../../database/index.js";

const getAllStudios = async (req, res) => {
  try {
    const studios = await Studio.findAll({ where: { status: true } });
    return res.status(200).json(studios);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

const getStudioByID = async (req, res) => {
  try {
    const { id } = req.params;
    const studio = await Studio.findByPk(id);

    return studio
      ? res.status(200).json(studio)
      : res.status(404).json({
          error: "Estudio de animación no encontrado",
        });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

const getStudioByName = async (req, res) => {
  try {
    const { name } = req.query;
    const studios = await Studio.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    return res.status(200).json(studios);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

export default { getAllStudios, getStudioByID, getStudioByName };
