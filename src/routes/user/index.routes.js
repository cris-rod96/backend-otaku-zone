import { Router } from "express";
import { userControllers } from "../../controllers/index.js";
import { jwtMiddlewares } from "../../middlewares/index.js";

const router = Router();

router.post("/register", userControllers.registerUser);
router.put(
  "/update/:id",
  // jwtMiddlewares.verifyToken,
  userControllers.updateUser
);
router.delete(
  "/delete/:id",
  // jwtMiddlewares.verifyToken,
  userControllers.deleteUser
);

// GET, only by admins
router.get(
  "/list",
  // jwtMiddlewares.verifyToken,
  // jwtMiddlewares.isAdmin,
  userControllers.getUsers.getAllUsers
);
router.get(
  "/view/:id",
  // jwtMiddlewares.verifyToken,
  // jwtMiddlewares.isAdmin,
  userControllers.getUsers.getUserByID
);
router.get(
  "/search",
  // jwtMiddlewares.verifyToken,
  // jwtMiddlewares.isAdmin,
  userControllers.getUsers.getUserByName
);

export default router;
