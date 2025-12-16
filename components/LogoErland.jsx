"use client";

import { TbDrone } from "react-icons/tb";
import ThemeToggle from "./ThemeToggle";

const LogoErland = () => {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="flex flex-col items-center">
        <TbDrone className="text-[var(--color-accent)] text-4xl drone-float opacity-90" />
        <ThemeToggle />
      </div>

      <span className="font-primary text-1xl font-semibold tracking-wide uppercase">
        <span className="text-[var(--color-text)]">Eventos</span>{" "}
        <span className="text-[var(--color-accent)]">Talara</span>
      </span>
    </div>
  );
};

export default LogoErland;
