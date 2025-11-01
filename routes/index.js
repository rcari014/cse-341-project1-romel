import express from "express";
import contactRoutes from "./contacts.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Romel's Contacts API!" });
});

router.use("/api", contactRoutes);

export default router;