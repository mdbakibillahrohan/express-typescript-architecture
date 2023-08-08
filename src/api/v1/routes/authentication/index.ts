import { Router } from "express";
import loginRouter from "./login.route";
const authentication_router = Router();
authentication_router.use(loginRouter);
export default authentication_router;
