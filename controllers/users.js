// controllers/users.js
import { connectToDatabase } from "../data/database.js";

export async function getProfile(req, res) {
  try {
    const db = await connectToDatabase();
    const profiles = db.collection("profiles");
    const profile = await profiles.findOne({});
    res.json(profile);
  } catch (error) {
    console.error("❌ Error fetching profile:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
