// server.js
import express from "express";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Updated client configuration
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tls: true,
  tlsAllowInvalidCertificates: true, // ✅ fixes Render–Atlas TLS mismatch
});

async function main() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    const db = client.db("romel_api_db");
    const profiles = db.collection("profiles");

    app.get("/", (req, res) => {
      res.json({ message: "Welcome to Romel's API connected to MongoDB!" });
    });

    app.get("/api/profile", async (req, res) => {
      try {
        const profile = await profiles.findOne({});
        res.json(profile);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch data" });
      }
    });

    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  }
}

main();
