"use client";

import { BiLayer } from "react-icons/bi";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext } from "react";
import { EventContext } from "@/contexts/EventContext";
import { set } from "date-fns";

const EventType = () => {
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
  } = useContext(EventContext);

  const uniqueTypes = [
    "Todas las Categorías",
    ...new Set(
      events.map((event) => {
        return event.type;
      })
    ),
  ];

  console.log(uniqueTypes);
  return (
    <div className="flex items-center justify-between w-full gap-[10px] xl:w-[190px]">
      <div className="text-lg text-[var(--color-accent)]">
        <BiLayer />
      </div>
      <Select
        className="flex-1"
        // value={selectedLocation}
        // onValueChange={(value) => setSelectedLocation(value)}
      >
        <SelectTrigger className="bg-transparent border-none focus:ring-0 focus:ring-offset-0 text-left p-0 text-[var(--color-text)] w-full justify-between text-left  p-0 capitalize">
          <SelectValue placeholder="Categoría" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categoria</SelectLabel>
            {uniqueTypes.map((uniqueType, index) => {
              return (
                <SelectItem
                  value={
                    uniqueType === "Categoría"
                      ? null
                      : uniqueType
                  }
                  key={index}
                  className="capitalize"
                >
                  {uniqueType}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default EventType;
