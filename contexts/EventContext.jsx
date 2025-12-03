"use client";

import { useEffect, useMemo, useState, createContext, Children } from "react";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showEventList, setShowEventList] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const [appliedFilters, setAppliedFilters] = useState({
    searchTerm: "",
    selectedLocation: "",
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
        const res = await fetch("/api/events");
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        setEvents(data);

        // //para de cargar
        // setIsLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message || "Error al cargar eventos");

        // //para de cargar
        // setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleSubmit = () => {
    setIsLoading(true);
    setShowEventList(true);
    setAppliedFilters({
      searchTerm,
      selectedLocation,
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setShowEventList(false);
    setSelectedLocation("");
  };

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
        showEventList,
        selectedLocation,
        setSelectedLocation,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
