import express from "express";
import authentication_router from "./authentication";

const router_v1 = express.Router();
router_v1.use(authentication_router);
export default router_v1;
