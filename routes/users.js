// routes/users.js
import express from "express";
import { getContacts, getContactById } from "../controllers/users.js";

const router = express.Router();

// Get all contacts
router.get("/contacts", getContacts);

// ✅ Get single contact by ID
router.get("/contacts/:id", getContactById);

export default router;