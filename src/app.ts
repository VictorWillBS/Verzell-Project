import express, {json} from "express"
import cors from "cors"
import "express-async-errors"
import router from "./router"
const app =  express()
app.use(cors())
app.use(json())
app.use(router)
export default app