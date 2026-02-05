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
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const [appliedFilters, setAppliedFilters] = useState({
    searchTerm: "",
    selectedLocation: "",
    selectedDate: null,
    selectedType:null,
  });

  const filteredEvents = useMemo(() => {
    const today = new Date();
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      if (eventDate < today) return false;

      const matchesSearch = appliedFilters.searchTerm
        ? event.title
            .toLowerCase()
            .includes(appliedFilters.searchTerm.toLowerCase())
        : true;

      const matchesLocation = appliedFilters.selectedLocation
        ? event.location.toLowerCase() ===
          appliedFilters.selectedLocation.toLowerCase()
        : true;

      const matchesDate = appliedFilters.selectedDate
        ? (() => {
            const eventFormatted = eventDate.toISOString().split("T")[0];
            const selectedFormatted = new Date(appliedFilters.selectedDate)
              .toISOString()
              .split("T")[0];

            const sonIguales = eventFormatted === selectedFormatted;

            return sonIguales;
          })()
        : true;

        const matchesType = appliedFilters.selectedType ? event.type.toLowerCase() === appliedFilters.selectedType.toLowerCase() : true

      return matchesSearch && matchesLocation && matchesDate && matchesType;
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
      selectedDate,
      selectedType,
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setShowEventList(false);
    setSelectedLocation("");
    setSelectedDate(null);
    setSelectedType(null);
  };



const formatDate = (dateString) => {
  if (!dateString) return "";

  // dateString: "2026-02-20"
  const [y, m, d] = dateString.split("-").map(Number);

  // Creamos la fecha como "fecha local" (sin desfase UTC)
  const date = new Date(y, m - 1, d);

  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "America/Lima",
  };

  // es-PE = español Perú
  return new Intl.DateTimeFormat("es-PE", options).format(date);
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
        selectedDate,
        setSelectedDate,
        selectedType,
        setSelectedType,
        formatDate
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
