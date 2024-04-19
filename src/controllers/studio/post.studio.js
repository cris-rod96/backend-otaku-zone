import { Studio } from "../../database/index.js";

export const createStudio = async (req, res) => {
  try {
    const data = req.body;
    const newStudio = await Studio.create(data);
    return res.status(200).json({
      message: "Se ha registrado un nuevo estudio de animación con éxito",
    });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};
