import { Op } from "sequelize";
import { Author } from "../../database/index.js";

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll({});
    return res.status(200).json(authors);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};
const getAuthorByID = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findByPk(id);
    return author
      ? res.status(200).json(author)
      : res.status(404).json({
          error: "Author no encontrado",
        });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};
const getAuthorByName = async (req, res) => {
  try {
    const { name } = req.query;
    const authors = await Author.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    return res.status(200).json(authors);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

export default { getAllAuthors, getAuthorByID, getAuthorByName };
