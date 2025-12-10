"use client";

import EventList from "@/components/Events/EventList";

import { useContext } from "react";
import { EventContext } from "@/contexts/EventContext";
import Hero from "@/components/Hero";

const Home = () => {
  const {
    events,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    filteredEvents,
    handleSubmit,
    handleClearSearch,
    showEventList,
  } = useContext(EventContext);
  console.log(showEventList);

  return (
    <div>
          <Hero/>
      <div className="flex flex-col justify-center items-center">

       
      </div>

      {showEventList ? (
        <div className="container mx-auto">
          <EventList />
        </div>
      ) : (
        <div>
          <div className="container mx-auto">
            <div>upcoming events slider</div>
            <div>Descargar seccion de la App</div>
            <div>Eventos recomendados</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
