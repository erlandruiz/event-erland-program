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
      <div className="container mx-auto h-full flex flex-col justify-center items-center pt-12 xl:pt-0">
        <div className="w-full max-w-[684px] text-center mx-auto flex flex-col gap-2">
          <div className="pretitle">
            Explora eventos y vive nuevas experiencias.
          </div>
          <h1 className="h1">
            Eventos que se viven <br /> historias que se recuerdan.
          </h1>
          <p className="text-sm xl:text-lg font-light text-[var(--color-text)] mb-4 xl:mb-12 max-w-[480px] xl:max-w-none mx-auto">
            Explora una selección de actividades diseñadas para todos los
            gustos. Desde encuentros culturales hasta experiencias inolvidables,
            aquí encontrarás el evento perfecto para crear nuevos recuerdos.
          </p>
        </div>
        <div>
          <Searchbar />
          <div className="w-full  mt-3 relative flex flex-col justify-center">
            <p className="text-sm italic font-light text-[var(--color-text)] text-center mb-3 xl:mb-0">
              Por favor seleccione al menos un evento o deje los campos vacios
              para ver todos los eventos
            </p>
            <button
              className="btn text-[var(--color-accent)] text-sm xl:absolute right-0"
              onClick={() => handleClearSearch()}
            >
              Limpiar búsqueda
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bg-[var(--color-primary)] top-0 left-0 w-[50vw] h-full bg-hero-1  bg-blend-color-dodge bg-no-repeat bg-cover -z-10 opacity-50"></div>
      <div className="absolute bg-[var(--color-primary)] top-0 right-0 w-[50vw] h-full bg-hero-2  bg-blend-lighten bg-no-repeat bg-cover -z-10 opacity-50"></div>
    </section>
  );
};

export default Hero;
