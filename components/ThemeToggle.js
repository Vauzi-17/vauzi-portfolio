"use client";

import { useEffect, useState, useRef } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("system");
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    setIsOpen(false);

    if (newTheme === "system") {
      localStorage.removeItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
      setIsDark(prefersDark);
    } else {
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      setIsDark(newTheme === "dark");
    }
  };

  const getIcon = (themeType) => {
    if (themeType === "light") return <Sun size={18} />;
    if (themeType === "dark") return <Moon size={18} />;
    return <Monitor size={18} />;
  };

  if (!mounted) return null;

  const themes = [
    { value: "light", label: "Light", icon: <Sun size={18} /> },
    { value: "dark", label: "Dark", icon: <Moon size={18} /> },
    { value: "system", label: "System", icon: <Monitor size={18} /> },
  ];

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: -10,
      filter: "blur(4px)",
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: [0.34, 1.56, 0.64, 1], // easeOutBack
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -10,
      filter: "blur(4px)",
      transition: {
        duration: 0.2,
        ease: [0.55, 0.085, 0.68, 0.53],
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <div ref={dropdownRef} className="fixed top-6 right-6 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          flex items-center gap-2
          px-4 py-2 rounded-full
          bg-card border border-main
          text-main shadow-md
          transition-all duration-300
        "
      >
        {getIcon(theme)}
        <span className="text-xs capitalize">{theme}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="
              absolute right-0 mt-2
              min-w-[140px]
              bg-card border border-main
              rounded-2xl shadow-lg
              overflow-hidden
            "
          >
            {themes.map((themeOption, index) => (
              <motion.button
                key={themeOption.value}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="show"
                whileHover={{
                  x: 4,
                  transition: { duration: 0.2 },
                }}
                onClick={() => changeTheme(themeOption.value)}
                className={`
                  w-full flex items-center gap-3
                  px-4 py-3 text-sm
                  text-main
                  transition-all duration-200
                  hover:bg-main/5
                  ${theme === themeOption.value ? "bg-main/10" : ""}
                `}
              >
                {themeOption.icon}
                <span className="capitalize">{themeOption.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}