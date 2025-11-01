import { connectToDatabase } from "../data/database.js";
import { ObjectId } from "mongodb";

// Get all contacts
export async function getContacts(req, res) {
  try {
    const db = await connectToDatabase();
    const contacts = db.collection("contacts");
    const all = await contacts.find({}).toArray();
    res.json(all);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
}

// Get one contact by ID
export async function getContactById(req, res) {
  try {
    const db = await connectToDatabase();
    const contacts = db.collection("contacts");
    const id = req.params.id;
    const contact = await contacts.findOne({ _id: new ObjectId(id) });

    if (!contact) return res.status(404).json({ error: "Contact not found" });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contact" });
  }
}