import express from "express";
import { sendMsg } from "../controllers/userMsgController.js";

const router = express.Router();

router.post("/send", sendMsg);

export default router;
