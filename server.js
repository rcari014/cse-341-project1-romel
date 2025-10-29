// server.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Romel's API!" });
});

// New: Profile route
app.get("/api/profile", (req, res) => {
  res.json({
    name: "Romelito B. Cariño",
    role: "Full Stack Developer",
    location: "Philippines",
    skills: ["Node.js", "PHP", "Express", "MongoDB", "WordPress"],
    contact: {
      email: "romel@example.com",
      github: "https://github.com/rcari013",
      linkedin: "https://linkedin.com/in/romelcarino"
    }
  });
});


// Start the server
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
