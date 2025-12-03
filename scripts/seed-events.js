import { MongoClient } from "mongodb";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

// Emular __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables del archivo .env.local
dotenv.config({ path: ".env.local" });

async function main() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB || "event-program";

  if (!uri) {
    console.error("⚠️ MONGODB_URI no está definida en .env.local");
    process.exit(1);
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Conectado a MongoDB Atlas");

    const db = client.db(dbName);
    const collection = db.collection("events");

    // Ruta al archivo db.json
    const dbJsonPath = path.join(__dirname, "..", "db.json");
    const raw = fs.readFileSync(dbJsonPath, "utf-8");
    const json = JSON.parse(raw);

    const events = json.events || [];

    // Limpiar colección e insertar nuevos datos
    await collection.deleteMany({});
    const result = await collection.insertMany(events);

    console.log(`✅ Insertados ${result.insertedCount} eventos`);
  } catch (err) {
    console.error("❌ Error al insertar eventos:", err);
  } finally {
    await client.close();
    console.log("🔚 Conexión cerrada");
  }
}

main();
