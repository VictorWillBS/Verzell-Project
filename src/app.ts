import express, {json} from "express";
import cors from "cors";
import "express-async-errors";
import router from "./router";
import errorHandle from "./middleware/erroHandle";
const app =  express();
app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandle)
export default app;