// routes/index.js
import express from "express";
import userRoutes from "./users.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Romel's API connected to MongoDB!" });
});

router.use("/api", userRoutes);

export default router;