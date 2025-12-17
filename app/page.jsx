"use client";

import EventList from "@/components/Events/EventList";

import { useContext } from "react";
import { EventContext } from "@/contexts/EventContext";
import Hero from "@/components/Hero";
import UpcomingEvents from "@/components/UpcomingEvents";
import RecommendedEvents from "@/components/RecommendedEvents";

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
            <UpcomingEvents/>
            <div>Descargar seccion de la App</div>
            <RecommendedEvents/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
