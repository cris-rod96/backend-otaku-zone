import { Router } from "express";
import { animeControllers } from "../../controllers/index.js";
import { jwtMiddlewares } from "../../middlewares/index.js";

const router = Router();

router.get("/list", animeControllers.getAnimes.getAllAnimes);
router.get("/view/:id", animeControllers.getAnimes.getAnimeByID);
router.get("/search", animeControllers.getAnimes.getAnimeByName);

// Actions only Admins
router.post(
  "/create",
  // jwtMiddlewares.verifyToken,
  // jwtMiddlewares.isAdmin,
  animeControllers.createAnime
);
router.put(
  "/update/:id",
  // jwtMiddlewares.verifyToken,
  // jwtMiddlewares.isAdmin,
  animeControllers.updateAnime
);
router.delete(
  "/delete/:id",
  // jwtMiddlewares.verifyToken,
  // jwtMiddlewares.isAdmin,
  animeControllers.deleteAnime
);

export default router;
