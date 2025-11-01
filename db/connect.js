// db/connect.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

let db;

export async function connectToDatabase() {
  if (db) return db;

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  db = client.db("cse-341-project1-romel");
  return db;
}