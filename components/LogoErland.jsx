"use client";

import { TbDrone } from "react-icons/tb";

const LogoErland = () => {
  return (
    <div className="flex items-center gap-2 select-none">
      <TbDrone className="text-[var(--color-accent)] text-4xl drone-float opacity-90" />

      <span className="font-primary text-1xl font-semibold tracking-wide uppercase">
        <span className="text-[var(--color-text)]">Eventos</span>{" "}
        <span className="text-[var(--color-accent)]">Talara</span>
      </span>
    </div>
  );
};

export default LogoErland;
