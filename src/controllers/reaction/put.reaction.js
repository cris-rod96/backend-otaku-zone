import { Reaction } from "../../database/index.js";

const updateReaction = async (req, res) => {
  try {
    const data = req.body;
    const [rows, _] = await Reaction.update(data, {
      where: {
        id: data.reaction_id,
      },
    });
    return rows > 0
      ? res.status(200).json({
          message: "Reacción actualizada",
        })
      : res.status(304).json({
          message: "Sin cambios detectados",
        });
  } catch ({ message }) {
    return res.status(500).json({ error: message });
  }
};

export default updateReaction;
