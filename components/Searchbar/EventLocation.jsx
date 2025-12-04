import { EventContext } from "@/contexts/EventContext";
import { useContext } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { BiMap } from "react-icons/bi";

const EventLocation = () => {
  const { events, selectedLocation, setSelectedLocation } =
    useContext(EventContext);

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
    <div className="flex items-center gap-[10px] w-full xl:w-[190px] select-none">
      <div className="text-lg text-[var(--color-accent)]">
        <BiMap />
      </div>
      <Select
        value={selectedLocation}
        onValueChange={(value) => setSelectedLocation(value)}
      >
        <SelectTrigger className="bg-transparent border-none focus:ring-0 focus:ring-offset-0 text-left p-0 text-[var(--color-text)]">
          <SelectValue placeholder="Lugares" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Lugar</SelectLabel>
            {uniqueLocations.map((uniqueLocation, index) => {
              return (
                <SelectItem
                  value={
                    uniqueLocation === "Todos los lugares"
                      ? null
                      : uniqueLocation
                  }
                  key={index}
                >
                  {uniqueLocation}
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
