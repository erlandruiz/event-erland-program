"use client";

import { EventContext } from "@/contexts/EventContext";
import { useContext, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

import Link from "next/link";
import Image from "next/image";

import { Event } from "./Events/Event";
import { SkeletonGrid } from "./SkeletonGrid";

const UpcomingEvents = () => {
  const {
    events,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,

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

  const [eventValue, setEventValue] = useState("todos");
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const filterEvents = () => {
      if (eventValue === "todos") {
        setFilteredEvents(events);
      } else {
        const result = events.filter((event) => {
          return event.type === eventValue;
        });
        setFilteredEvents(result);
      }
    };

    filterEvents();
  }, [eventValue, events]);

  return <div>
    <Tabs>
        <TabsList>
            <TabsTrigger>
                Todos
            </TabsTrigger>
        </TabsList>
    </Tabs>
  </div>;
};

export default UpcomingEvents;
