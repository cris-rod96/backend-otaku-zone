import { User } from "../../../database/index.js";

const loginWithPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(401).json({ message: "Credenciales incorrectas" });

    if (user && !user.status)
      return res.status(401).json({ message: "Usuario no válido" });

    const validCredentials = user.password === password;
    if (!validCredentials)
      return res.status(401).json({
        message: "Credenciales incorrectas",
      });

    return res.status(200).json({
      message: "Inicio de sesión correcto",
    });
  } catch {
    return res.status(401).json({
      message: "Credenciales incorrectas",
    });
  }
};

export default loginWithPassword;
