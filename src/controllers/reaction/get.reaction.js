import { Reaction } from "../../database/index.js";

const getAllReactions = async (req, res) => {
  try {
    const reactions = await Reaction.findAll();
    return res.status(200).json(reactions);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

const getReactionsByComment = async (req, res) => {
  try {
    const { comment_id } = req.params;
    const reactions = await Reaction.findAll({
      where: {
        targetID: comment_id,
      },
    });

    return res.status(200).json(reactions);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

const getReactionsByReply = async (req, res) => {
  try {
    const { reply_id } = req.params;
    const reactions = await Reaction.findAll({
      where: {
        targetID: reply_id_id,
      },
    });

    return res.status(200).json(reactions);
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};

export default { getAllReactions, getReactionsByComment, getReactionsByReply };
