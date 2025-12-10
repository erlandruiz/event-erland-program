"use client";

import { useContext } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { EventContext } from "@/contexts/EventContext";

const Hero = () => {
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
    selectedLocation,
    setSelectedLocation,
    selectedDate,
    setSelectedDate,
    selectedType,
    setSelectedType,
  } = useContext(EventContext);
  return (
    <section className="h-screen xl:h-[800px] mb-16 relative">
      <div className="container mx-auto">
        <div className="w-full max-w-[684px] text-center mx-auto flex flex-col gap-2">
          <div className="pretitle">
            Explora eventos y vive nuevas experiencias.
          </div>
          <h1 className="h1">
            Eventos que se viven <br /> historias que se recuerdan.
          </h1>
          <p className="text-sm xl:text-lg font-light text-[var(--color-secondary)] mb-4 xl:mb-12 max-w-[480px] xl:max-w-none mx-auto">
            Explora una selección de actividades diseñadas para todos los
            gustos. Desde encuentros culturales hasta experiencias inolvidables,
            aquí encontrarás el evento perfecto para crear nuevos recuerdos.
          </p>
        </div>
        <div>
          <Searchbar />
          <button
            className="btn text-[var(--color-accent)]"
            onClick={() => handleClearSearch()}
          >
            Limpiar búsqueda
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
