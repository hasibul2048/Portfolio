import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      const isDarkMode = storedTheme === "dark";
      setIsDark(isDarkMode);
      document.documentElement.classList.toggle("dark", isDarkMode);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full",
        "transition-colors duration-300 focus:outline-none"
      )}
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-600" />
      )}
    </button>
  );
};

export default ThemeToggle;
