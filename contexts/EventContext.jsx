"use client"

import  { useEffect, useMemo, useState, createContext, Children } from "react";

export const EventContext = createContext();

const EventProvider =({children})=>{
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError]= useState(null);



    useEffect(() => {
      const fetchEvents = async()=>{
        setIsLoading(true);
        try {
           const res = await fetch("http://localhost:4001/events");
           if(!res.ok) throw new Error("Failed to tech events");
           const data = await res.json();
           setEvents(data);

           //para de cargar
           setIsLoading(false)
        } catch (err) {
            setError(err.message);

            //para de cargar
            setIsLoading(false)
        }
      }
    
       fetchEvents();
    }, [])
    


    return(
        <EventContext.Provider value={{events

        }}>{children}</EventContext.Provider>
    )
}

export default EventProvider;