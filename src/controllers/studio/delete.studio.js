import { Studio } from "../../database/index.js";

const deleteStudio = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows, _] = await Studio.update({ status: false }, { where: { id } });
    return rows > 0
      ? res.status(200).json({
          message: "Estudio de animación eliminado con éxito",
        })
      : res.status(304).json({ message: "Sin cambios registrados" });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};
export default deleteStudio;
