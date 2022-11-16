import { Router } from "express";
import signUp from "../Schemas/signUp-Schema";
import validSchema from "../middleware/validSchema";
import authController from "../controller/authController";

const authRouter= Router();
authRouter.post('/sign-up', validSchema(signUp), authController.signUp)

export default authRouter