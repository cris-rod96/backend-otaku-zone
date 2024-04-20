import { Router } from "express";
import { studioControllers } from "../../controllers/index.js";
studioControllers;
const router = Router();

router.post("/create", studioControllers.createStudio);
router.put("/update/:id", studioControllers.updateStudio);
router.post("/delete/:id", studioControllers.deleteStudio);

router.get("/list", studioControllers.getStudios.getAllStudios);
router.get("/view/:id", studioControllers.getStudios.getStudioByID);
router.get("/search", studioControllers.getStudios.getStudioByName);

export default router;
