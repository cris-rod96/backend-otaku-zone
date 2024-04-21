import { User } from "../../../database/index.js";
import { bcryptHelpers, jwtHelpers } from "../../../helpers/index.js";

const loginWithPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(401).json({ message: "Credenciales incorrectas" });

    if (user && !user.status)
      return res.status(401).json({ message: "Usuario no válido" });

    const validCredentials = await bcryptHelpers.comparePassword(
      password,
      user.password
    );
    if (!validCredentials)
      return res.status(401).json({
        message: "Credenciales incorrectas",
      });

    const token = jwtHelpers.generateToken({
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    });
    return res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        nick: user.nick,
        email: user.email,
        isAdmin: user.isAdmin,
        status: user.status,
      },
      token,
    });
  } catch {
    return res.status(401).json({
      message: "Credenciales incorrectas",
    });
  }
};

export default loginWithPassword;
