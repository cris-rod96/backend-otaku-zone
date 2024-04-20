import { Router } from "express";
import { authControllers } from "../../controllers/index.js";

const router = Router();

router.post("/login", authControllers.localAuth.loginWithPassword);
router.post("/third", authControllers.thirdAuth.loginWithGoogle);
export default router;
