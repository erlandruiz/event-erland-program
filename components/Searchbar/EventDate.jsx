"use client";

import { format } from "date-fns";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";

import { Popover } from "@/components/ui/popover";

import { BiCalendar, BiChevronDown } from "react-icons/bi";
import { useContext, useState } from "react";
import { EventContext } from "@/contexts/EventContext";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
const EventDate = () => {
  const { selectedDate, setSelectedDate } = useContext(EventContext);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button>
            {selectedDate ? (
              format(selectedDate, "PPP")
            ) : (
              <span>Seleccione una fecha</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-[var(--color-secondary)] border-0 text-[var(--color-text-muted)]">
            <Calendar mode= "single" selectedDate={selectedDate}/>
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default EventDate;
