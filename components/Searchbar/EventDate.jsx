"use client";

import { useContext } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

import { EventContext } from "@/contexts/EventContext";

import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { BiCalendar, BiChevronDown } from "react-icons/bi";

const EventDate = () => {
  const { selectedDate, setSelectedDate } = useContext(EventContext);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex items-center gap-[10px] w-full  xl:w-[190px] select-none">
      <div className="text-lg text-[var(--color-accent)]">
        <BiCalendar />
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            className=" 
      flex items-center justify-start gap-2
      h-9
        bg-transparent border-none
        px-0
        text-sm text-[var(--color-text)]
        shadow-xs
        hover:bg-transparent

  
    "
          >
            <span className="truncate">
              {selectedDate ? format(selectedDate, "d 'de' MMMM 'de' yyyy", {locale:es}) : "Fecha de eventos"}
            </span>

            <div >
              <BiChevronDown />
            </div>

            {/* Ícono pegado al texto, como en SelectTrigger */}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0 bg-[var(--color-secondary)] border-0 text-[var(--color-text-muted)]">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateChange}
            defaultMonth={selectedDate || new Date()}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default EventDate;
