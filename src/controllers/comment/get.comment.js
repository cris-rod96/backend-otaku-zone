import { Comment, Reply } from "../../database/index.js";

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      include: [Reply],
    });
    return res.status(200).json(comments);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

const getCommentByID = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByPk(id, { include: [Reply] });
    return comment
      ? res.status(200).json(comment)
      : res.status(404).json({
          message: "Comentario no encontrado",
        });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};
const getCommentsByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const comments = await Comment.findAll({
      where: {
        UserId: user_id,
      },
      include: [Reply],
    });

    return res.status(200).json(comments);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};
const getCommentsByAnime = async (req, res) => {
  try {
    const { anime_id } = req.params;
    const animes = await Comment.findAll({
      where: {
        AnimeId: anime_id,
      },
      include: [Reply],
    });

    return res.status(200).json(animes);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

export default {
  getAllComments,
  getCommentByID,
  getCommentsByUser,
  getCommentsByAnime,
};
