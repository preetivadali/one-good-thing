import { useState, useEffect } from "react";
import Brand from "./Brand";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

const STORAGE_KEY = "one-good-thing:theme";

export default function Navbar({ currentPage, onNavigate }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem(STORAGE_KEY, isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md dark:bg-slate-900 dark:text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <Brand />

        <div className="flex items-center gap-3">
          <NavLinks currentPage={currentPage} onNavigate={onNavigate} />
          <ThemeToggle
            isDark={isDarkMode}
            onToggle={() => setIsDarkMode(!isDarkMode)}
          />
        </div>
      </div>
    </nav>
  );
}