// server.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Romel's API!" });
});

// Start the server
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
