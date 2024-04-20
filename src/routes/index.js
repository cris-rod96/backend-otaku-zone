import { Router } from "express";
import animeRoutes from "./anime/index.routes.js";
import authorRoutes from "./author/index.routes.js";
import authRoutes from "./auth/index.routes.js";
import commentRoutes from "./comment/index.routes.js";
import reactionRoutes from "./reaction/index.routes.js";
import seasonRoutes from "./season/index.routes.js";
import userRoutes from "./user/index.routes.js";
const routes = Router();

routes.use("/animes", animeRoutes);
routes.use("/authors", authorRoutes);
routes.use("/auth", authRoutes);
routes.use("/comments", commentRoutes);
routes.use("/reactions", reactionRoutes);
routes.use("/seasons", seasonRoutes);
routes.use("/users", userRoutes);

export default routes;
