// controllers/users.js
import { connectToDatabase } from "../data/database.js";

export async function getContacts(req, res) {
  try {
    const db = await connectToDatabase();
    const contacts = db.collection("contacts");

    // fetch all contacts (empty query = return all)
    const allContacts = await contacts.find({}).toArray();

    res.json(allContacts);
  } catch (error) {
    console.error("❌ Error fetching contacts:", error);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
}
