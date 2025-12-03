import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error("⚠️ MONGODB_URI no está definida en .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // En desarrollo, reutilizamos la conexión usando una variable global
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // En producción, solo creamos una nueva conexión
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
