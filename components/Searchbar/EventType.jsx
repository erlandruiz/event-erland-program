"use client";

import { BiLayer } from "react-icons/bi";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext } from "react";
import { EventContext } from "@/contexts/EventContext";

const EventType = () => {
  const { events, selectedType, setSelectedType } = useContext(EventContext);

  const uniqueTypes = [
    "Todas las Categorías",
    ...new Set(
      events.map((event) => {
        return event.type;
      })
    ),
  ];

  return (
    <div className="flex items-center justify-between w-full gap-[10px] xl:w-[190px] select-none">
      <div className="text-lg text-[var(--color-accent)]">
        <BiLayer />
      </div>
      <Select
        className="flex-1"
        // si no hay tipo seleccionado, usamos "ALL" para el Select
        value={selectedType ?? "ALL"}
        onValueChange={(value) => {
          if (value === "ALL") {
            // esto significa "todas las categorías"
            setSelectedType(null);
          } else {
            setSelectedType(value);
          }
        }}
      >
        <SelectTrigger className="bg-transparent border-none focus:ring-0 focus:ring-offset-0 text-left p-0 text-[var(--color-text)] w-full justify-between text-left  p-0 capitalize">
          <SelectValue placeholder="Tipo de categoría" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categoría</SelectLabel>
            {/* Opción "Todas las Categorías" */}
            <SelectItem value="ALL" className="capitalize">
              Todas las Categorías
            </SelectItem>
            {/* Resto de tipos únicos */}
          {uniqueTypes
              .filter((t) => t !== "Todas las Categorías")
              .map((uniqueType, index) => (
                <SelectItem
                  value={uniqueType}
                  key={index}
                  className="capitalize"
                >
                  {uniqueType}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default EventType;
