// routes/users.js
import express from "express";
import { getContacts } from "../controllers/users.js";

const router = express.Router();

// endpoint: /api/contacts
router.get("/contacts", getContacts);

export default router;
