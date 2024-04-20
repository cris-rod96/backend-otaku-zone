import { Router } from "express";
import { authorControllers } from "../../controllers/index.js";
import { jwtMiddlewares } from "../../middlewares/index.js";

const router = Router();

router.get("/view/:id", authorControllers.getAuthors.getAuthorByID);

// Actions only by admins
router.get(
  "/list",
  // jwtMiddlewares.verifyToken,
  // jwtMiddlewares.isAdmin,
  authorControllers.getAuthors.getAllAuthors
);
router.get(
  "/search",
  jwtMiddlewares.verifyToken,
  jwtMiddlewares.isAdmin,
  authorControllers.getAuthors.getAuthorByName
);

router.post(
  "/create",
  jwtMiddlewares.verifyToken,
  jwtMiddlewares.isAdmin,
  authorControllers.createAuthor
);
router.put(
  "/update/:id",
  jwtMiddlewares.verifyToken,
  jwtMiddlewares.isAdmin,
  authorControllers.updateAuthor
);
router.delete(
  "/delete/:id",
  jwtMiddlewares.verifyToken,
  jwtMiddlewares.isAdmin,
  authorControllers.deleteAuthor
);

export default router;
