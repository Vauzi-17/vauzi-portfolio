"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("system");
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("theme");

    const applyTheme = (mode) => {
      let darkMode;

      if (mode === "system") {
        darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      } else {
        darkMode = mode === "dark";
      }

      document.documentElement.classList.toggle("dark", darkMode);
      setIsDark(darkMode);
    };

    if (saved) {
      setTheme(saved);
      applyTheme(saved);
    } else {
      setTheme("system");
      applyTheme("system");
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (!localStorage.getItem("theme")) {
        applyTheme("system");
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    let newTheme;

    if (theme === "system") newTheme = "dark";
    else if (theme === "dark") newTheme = "light";
    else newTheme = "system";

    setTheme(newTheme);

    if (newTheme === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", newTheme);
    }

    if (newTheme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
      setIsDark(prefersDark);
    } else {
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      setIsDark(newTheme === "dark");
    }
  };

  // Hindari hydration mismatch
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed top-6 right-6 z-50
        flex items-center gap-2
        px-4 py-2 rounded-full
        bg-card border border-main
        text-main shadow-md
        transition-all duration-300
        hover:scale-105
      "
    >
      {isDark ? <Moon size={18} /> : <Sun size={18} />}
      <span className="text-xs capitalize">{theme}</span>
    </button>
  );
}
