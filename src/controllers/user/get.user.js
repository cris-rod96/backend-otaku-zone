import { Op } from "sequelize";
import { User } from "../../database/index.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    return res.status(200).json(users);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

const getUserByID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
    });

    return user
      ? res.status(200).json(user)
      : res.status(404).json({
          error: "Usuario no encontrado",
        });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

const getUserByName = async (req, res) => {
  try {
    const { name } = req.query;
    const users = await User.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },

      attributes: {
        exclude: ["password"],
      },
    });

    return res.status(200).json(users);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

export default { getAllUsers, getUserByID, getUserByName };
