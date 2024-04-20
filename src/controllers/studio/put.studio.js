import { Studio } from "../../database/index.js";

const updateStudio = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const [rows, _] = await Studio.update(data, { where: { id } });
    return rows > 0
      ? res.status(200).json({
          message: "Se ha actualizado la información del estudio con éxito",
        })
      : res.status(304).json({ message: "Sin cambios registrados" });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};
export default updateStudio;
