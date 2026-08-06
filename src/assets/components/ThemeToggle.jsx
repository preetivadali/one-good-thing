

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
      {isDark ? (
        // Show moon icon when currently dark; clicking it switches to light.
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ) : (
        // Show sun icon when currently light; clicking it switches to dark.
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.76 4.84l-1.8-1.79L3.17 4.85l1.79 1.79 1.8-1.8zM1 13h3v-2H1v2zm10 9h2v-3h-2v3zm7.03-2.03l1.79 1.79 1.79-1.79-1.79-1.79-1.79 1.79zM17 13a5 5 0 11-10 0 5 5 0 0110 0zm-1-9h-2v3h2V4zM4.24 19.16l1.8-1.79-1.8-1.8L2.45 17.36l1.79 1.8zM20 11v2h3v-2h-3z" />
        </svg>
      )}
    </button>
  );
}
