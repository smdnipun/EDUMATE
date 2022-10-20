import express from "express";
import {
  CreateChatbox,
  Getchatbox,
  Getchatboxsubject,
} from "../controller/chatbox.controller.js";
const router = express.Router();
//CREATE
router.post("/add", CreateChatbox);

//get all chat
router.get("/get", Getchatbox);

//filter
router.post("/subject", Getchatboxsubject);

export default router;
