import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "event-program");

    const events = await db
      .collection("events")
      .find({})
      .sort({ id: 1 })// opcional: orden por id
      .toArray();

      return new Response (JSON.stringify(events),{
        status:200,
        headers:{"Content-Type": "application/json"},
      })
  } catch (error) {
    console.error("Error al obtener eventos:", error);
    return new Response(
        JSON.stringify({message: "Error al obtener eventos"}),
        {status:500}
    )
  }
}


//Este endpoint devolverá un arreglo de eventos, igual que hacía json-server cuando llamabas a http://localhost:4001/events