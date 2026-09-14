import express from "express";

import {
  createContactMessage,
  getContactMessages,
  deleteContactMessage,
} from "../controllers/contactController.js";

const router = express.Router();

// Send contact message
router.post("/", createContactMessage);

// Get all messages
router.get("/", getContactMessages);

// Delete message
router.delete("/:id", deleteContactMessage);

export default router;