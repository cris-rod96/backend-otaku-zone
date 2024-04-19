import { Reaction } from "../../database/index.js";

export default saveNewReaction = async (req, res) => {
  try {
    const data = req.body;
    await Reaction(data);
    return res.status(200).json({
      message: "Hemos recibido su reacción con éxito",
    });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};
