import express from "express";
import { chatbotResponse } from "../controllers/chatBot.controller.js";

const router = express.Router();

// POST /chat
router.post("/chat", chatbotResponse);

export default router;