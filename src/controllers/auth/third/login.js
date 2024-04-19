import { User } from "../../../database/index.js";

export default loginWithGoogle = async (req, res) => {
  try {
    const { sub_auth, email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(400).json({
        message:
          "Oops!. Aún no estas registrado. Registrate e intenta de nuevo",
      });
    if (user && !user.status)
      return res.status(401).json({
        message: "Usuario no válido",
      });
    const userValidate = user.sub_auth === sub_auth;
    if (!userValidate)
      return res.status(401).json({
        message: "Error al iniciar sesión. ID de autenticación no válida",
      });
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
    });
  }
};
