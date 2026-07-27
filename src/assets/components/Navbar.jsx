import { useState, useEffect } from "react";
import Brand from "./Brand";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

// Name used to save the theme in Local Storage
const STORAGE_KEY = "one-good-thing:theme";

export default function Navbar({ currentPage, onNavigate }) {

  // Store whether Dark Mode is on or off
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem(STORAGE_KEY) === "dark"
  );

  // This runs whenever isDarkMode changes
  useEffect(() => {

    // Add or remove the "dark" class
    document.documentElement.classList.toggle("dark", isDarkMode);

    // Save the selected theme
    if (isDarkMode) {
      localStorage.setItem(STORAGE_KEY, "dark");
    } else {
      localStorage.setItem(STORAGE_KEY, "light");
    }

  }, [isDarkMode]);

  // Change between Light Mode and Dark Mode
  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md dark:bg-slate-900 dark:text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* Website Logo */}
        <Brand />

        <div className="flex items-center gap-3">

          {/* Navigation Links */}
          <NavLinks
            currentPage={currentPage}
            onNavigate={onNavigate}
          />

          {/* Theme Button */}
          <ThemeToggle
            isDark={isDarkMode}
            onToggle={toggleTheme}
          />

        </div>
      </div>
    </nav>
  );
}