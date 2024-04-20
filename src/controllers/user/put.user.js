import { User } from "../../database/index.js";

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const [rows, _] = await User.update(data, { where: { id } });

    return rows > 0
      ? res.status(200).json({
          message: "La información del usuario ha sido actualizada.",
        })
      : res.status(304).json({
          message: "Sin cambios registrados",
        });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};
export default updateUser;
