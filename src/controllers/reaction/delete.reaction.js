import { Reaction } from "../../database/index.js";

export default deleteReaction = async (req, res) => {
  try {
    const { reaction_id } = req.body;
    await Reaction.destroy({
      where: {
        id: reaction_id,
      },
    });
    return res.status(200).json({
      message: "Su reacción eliminada con éxito",
    });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};
