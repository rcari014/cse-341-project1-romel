// server.js
import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Create a MongoDB client
const client = new MongoClient(process.env.MONGODB_URI);

async function main() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    // Select database and collection
    const db = client.db("romel_api_db");
    const profiles = db.collection("profiles");

    // Default route
    app.get("/", (req, res) => {
      res.json({ message: "Welcome to Romel's API connected to MongoDB!" });
    });

    // Route that fetches one document from MongoDB
    app.get("/api/profile", async (req, res) => {
      try {
        const profile = await profiles.findOne({});
        res.json(profile);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch data" });
      }
    });

    // Start the server
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
  }
}

// Run the main function
main();
