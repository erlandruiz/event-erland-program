"use client";

import { useEffect, useState } from "react";

const Timer = ({ event }) => {
  const eventDate = new Date(`${event.date}T${event.hour}`);

  const [timeRemaining, setTimeRemaining] = useState(eventDate - new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date(); // get current time
      const timeLeft = eventDate - now; // calculate the remaining time

      if (timeLeft < 0) {
        clearInterval(interval);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(timeLeft);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  if (timeRemaining <= 0) {
    return <div>El evento ya finalizo</div>;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="flex flex-wrap gap-4">
      <div className="text-center border-[3px] border-[var(--color-accent)] rounded-full w-[100px] h-[100px] flex items-center justify-center">
        <div>
          <div className="text-3xl font-semibold">{days}</div>
          <div className="text-sm uppercase font-medium">Dias</div>
        </div>
      </div>

      <div className="text-center border-[3px] border-[var(--color-accent)] rounded-full w-[100px] h-[100px] flex items-center justify-center">
        <div>
          <div className="text-3xl font-semibold">{hours}</div>
          <div className="text-sm uppercase font-medium">Horas</div>
        </div>
      </div>

      <div className="text-center border-[3px] border-[var(--color-accent)] rounded-full w-[100px] h-[100px] flex items-center justify-center">
        <div>
          <div className="text-3xl font-semibold">{minutes}</div>
          <div className="text-sm uppercase font-medium">Minutos</div>
        </div>
      </div>

      <div className="text-center border-[3px] border-[var(--color-accent)] rounded-full w-[100px] h-[100px] flex items-center justify-center">
        <div>
          <div className="text-3xl font-semibold">{seconds}</div>
          <div className="text-sm uppercase font-medium">Segundos</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
