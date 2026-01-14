"use client";

import { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("theme");
    const initial = saved || "dark";
    setTheme(initial);
    if (initial === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window === "undefined") return;
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", next);
  };
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className=" flex items-center justify-center rounded-full bg-[var(--color-tertiary)] hover:bg-[var(--color-tertiary-hover)] transition-colors"
    >
      {theme === "dark" ? <BsSunFill className="text-yellow-300 text-3xl"/> : <BsMoonFill className="text-yellow-300  text-3xl" />}
    </button>
  );
};

export default ThemeToggle;
