import { useState, useEffect } from "react";
import Brand from "./Brand";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

const STORAGE_KEY = "one-good-thing:theme";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem(STORAGE_KEY, isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md dark:bg-slate-900 dark:text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <Brand />

        <div className="flex items-center">
          <NavLinks />
          <ThemeToggle
            isDark={isDarkMode}
            onToggle={() => setIsDarkMode(!isDarkMode)}
          />
        </div>
      </div>
    </nav>
  );
}