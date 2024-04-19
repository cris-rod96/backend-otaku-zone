import { Comment } from "../../database/index.js";

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll({});
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
    const comment = await Comment.findByPk(id);
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
const getCommentByUsers = async (req, res) => {
  try {
    const { user_id } = req.params;
    const comments = await Comment.findAll({
      where: {
        UserId: user_id,
      },
    });

    return res.status(200).json(comments);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};
const getCommentByAnimes = async (req, res) => {
  try {
    const { anime_id } = req.params;
    const animes = await Comment.findAll({
      where: {
        AnimeId: anime_id,
      },
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
  getCommentByUsers,
  getCommentByAnimes,
};
