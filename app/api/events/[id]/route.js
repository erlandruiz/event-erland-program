import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(_request, { params }) {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ message: "ID inválido" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "event-program");

    const event = await db
      .collection("events")
      .findOne({ _id: new ObjectId(id) });

    if (!event) {
      return new Response(
        JSON.stringify({ message: "Evento no encontrado" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ ...event, _id: event._id.toString() }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al obtener evento:", error);
    return new Response(JSON.stringify({ message: "Error al obtener evento" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
