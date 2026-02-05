const EventDetails =async ({params})=>{
    const {id} = await params;
   


    const fetchEvent = async (id)=>{
        const res = await fetch(`/api/events/${id}`)
        if(!res.ok) throw new Error("Fallo el llamado a event");
        return res.json()
    }

    const event = await fetchEvent(id);
    console.log(event)

    return(
        <section className="min-h-screen flex items-center py-8 sm:py-48">
            <div className="container mx-auto">
            EventDetails

            </div>
        </section>
    )
}

export default EventDetails