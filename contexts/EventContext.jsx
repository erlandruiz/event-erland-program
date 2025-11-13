"use client";

import { useEffect, useMemo, useState, createContext, Children } from "react";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const [appliedFilters, setAppliedFilters] = useState({
    searchTerm: "",
  });

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch = appliedFilters.searchTerm
        ? event.title
            .toLowerCase()
            .includes(appliedFilters.searchTerm.toLowerCase())
        : true;

      return matchesSearch;
    });
  }, [events, appliedFilters]);

 

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:4001/events");
        if (!res.ok) throw new Error("Failed to tech events");
        const data = await res.json();
        setEvents(data);

        //para de cargar
        setIsLoading(false);
      } catch (err) {
        setError(err.message);

        //para de cargar
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);


  const handleSubmit =()=>{
    setIsLoading(true)
    setAppliedFilters({
      searchTerm
    });
   setTimeout(() => {
    setIsLoading(false)
   }, 2500);
  }

  const handleClearSearch =()=>{
    setSearchTerm("")
  }

  return (
    <EventContext.Provider
      value={{
        events,
        isLoading,
        error,
        searchTerm,
        setSearchTerm,
        filteredEvents,
        handleSubmit,
        handleClearSearch,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
