import { Router } from "express";
import { reactionControllers } from "../../controllers/index.js";
import { jwtMiddlewares } from "../../middlewares/index.js";

const router = Router();

router.post(
  "/save",
  jwtMiddlewares.verifyToken,
  reactionControllers.saveNewReaction
);
router.put(
  "/update/:id",
  jwtMiddlewares.verifyToken,
  reactionControllers.updateReaction
);
router.delete(
  "/delete/:id",
  jwtMiddlewares.verifyToken,
  reactionControllers.deleteReaction
);

// Actions only by admins
router.get(
  "/list",
  jwtMiddlewares.verifyToken,
  //   jwtMiddlewares.isAdmin,
  reactionControllers.getReactions.getAllReactions
);
router.get(
  "/comment/:id",
  jwtMiddlewares.verifyToken,
  //   jwtMiddlewares.isAdmin,
  reactionControllers.getReactions.getReactionsByComment
);
router.get(
  "/reply/:id",
  jwtMiddlewares.verifyToken,
  //   jwtMiddlewares.isAdmin,
  reactionControllers.getReactions.getReactionsByReply
);

export default router;
