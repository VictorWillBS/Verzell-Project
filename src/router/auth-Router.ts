import { Router } from 'express';
import signUp from '../Schemas/signUp-Schema';
import validSchema from '../middleware/validSchema';
import authController from '../controller/authController';
import signIn from '../Schemas/signIn-Schema';

const authRouter = Router();
authRouter.post('/sign-up', validSchema(signUp), authController.signUp);
authRouter.post('/sing-in', validSchema(signIn));
export default authRouter;
