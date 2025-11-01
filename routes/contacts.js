import express from "express";
import { getContacts, getContactById } from "../controllers/contacts.js";

const router = express.Router();

router.get("/contacts", getContacts);
router.get("/contacts/:id", getContactById);

export default router;