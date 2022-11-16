import { Router } from "express";
import authRouter from "./auth-Router";
const router = Router();
router.use("/user",authRouter)
export default router;