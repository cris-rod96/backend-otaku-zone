import { request } from "express";
import { jwtHelpers } from "../../helpers/index.js";
import { User } from "../../database";

const verifyToken = async (req = request, res, next) => {
  try {
    const token = req.header("x-token");
    if (!token)
      return res.status(401).json({
        message: "Acceso denegado. No se encontró token en la petición",
      });

    const { id } = jwtHelpers.verifyToken(token);
    if (!id)
      return res.status(401).json({
        message: "Acceso denegado. Token inválido",
      });

    const user = await User.findByPk(id);
    if (!user)
      return res.status(401).json({
        message: "Acceso denegado. Token inválido",
      });

    req.user = user;
    next();
  } catch {
    return res.status(401).json({
      message: "Acceso denegado. Token inválido",
    });
  }
};

const isAdmin = async (req, res, next) => {
  const user = req.user;
  if (!user.isAdmin)
    return res.status(401).json({
      message:
        "Accedo denegado. No tienes los permisos necesarios para realizar esta acción",
    });

  next();
};

export default { verifyToken, isAdmin };
