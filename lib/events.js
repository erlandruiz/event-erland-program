import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

/**
 * Obtiene un evento por su _id de MongoDB.
 * - id llega como string desde la URL: /event/<id>
 * - Devuelve el documento con _id serializado a string (para React/Next).
 */
export async function getEventByMongoId(id) {
  if (!ObjectId.isValid(id)) return null;

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB || "event-program");

  const event = await db
    .collection("events")
    .findOne({ _id: new ObjectId(id) });

  if (!event) return null;

  return {
    ...event,
    _id: event._id.toString(),
  };
}
