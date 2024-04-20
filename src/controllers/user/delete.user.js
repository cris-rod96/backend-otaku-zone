import { User } from "../../database/index.js";
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows, _] = await User.update({ status: false }, { where: { id } });
    return rows > 0
      ? res.status(200).json({
          message: "El Usuario ha sido eliminado.",
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

export default deleteUser;
