import express from "express";
import router_v1 from "./v1/routes";
const router = express.Router();
router.use("/api/v1", router_v1);
export default router;
