import { EventContext } from "@/contexts/EventContext";
import { useContext } from "react";

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

const EventLocation = () => {
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
  } = useContext(EventContext);

  const uniqueLocations = [
    "Todos los lugares",
    ...new Set(
      events
        .filter((event) => {
          const eventDate = new Date(event.date);
          const currentDate = new Date();

          if (eventDate > currentDate) return true;

          if (eventDate.toDateString() === currentDate.toDateString()) {
            const eventTime = eventDate.getTime();
            const currentTime = currentDate.getTime();
            return eventTime > currentTime;
          }

          return false;
        })
        .map((event) => event.location)
    ),
  ];

  return (
    <div>
      <Select
        value={setSelectedLocation}
        onValueChange={(value) => setSelectedLocation(value)}
      >
        <SelectTrigger className="bg-transparent border-none focus:ring-0 focus:ring-offset-0 text-left p-0">
          <SelectValue placeholder="Lugares" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Lugar</SelectLabel>
            {uniqueLocations.map((location, index) => {
              return (
                <SelectItem
                  value={location === "Todos los lugares" ? null : location}
                  key={index}
                >
                  {location}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default EventLocation;
