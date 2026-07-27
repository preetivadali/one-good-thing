

/**
 * ThemeToggle — presentational toggle button that triggers theme changes.
 * Props:
 * - `isDark` (boolean) current theme state
 * - `onToggle` (function) callback to flip the theme
 */
export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/0 p-2 transition-colors duration-200 hover:bg-purple-100 dark:hover:bg-purple-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </button>
  );
}
