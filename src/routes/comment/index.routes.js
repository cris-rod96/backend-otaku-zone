import { Router } from "express";
import { commentControllers } from "../../controllers/index.js";
import { jwtMiddlewares } from "../../middlewares/index.js";

const router = Router();

router.post(
  "/create",
  // jwtMiddlewares.verifyToken,
  commentControllers.createComment
);
router.put(
  "/update/:id",
  // jwtMiddlewares.verifyToken,
  commentControllers.updateComment
);
router.delete(
  "/delete/:id",
  // jwtMiddlewares.verifyToken,
  commentControllers.deleteComment
);

// Actions only by admins
router.get(
  "/list",
  // jwtMiddlewares.verifyToken,
  // jwtMiddlewares.isAdmin,
  commentControllers.getComments.getAllComments
);
router.get(
  "/view/:id",
  // jwtMiddlewares.verifyToken,
  // jwtMiddlewares.isAdmin,
  commentControllers.getComments.getCommentByID
);
router.get(
  "/view/users/:id",
  // jwtMiddlewares.verifyToken,
  // jwtMiddlewares.isAdmin,
  commentControllers.getComments.getCommentsByUser
);
router.get(
  "/view/anime/:id",
  // jwtMiddlewares.verifyToken,
  // jwtMiddlewares.isAdmin,
  commentControllers.getComments.getCommentsByAnime
);

export default router;
