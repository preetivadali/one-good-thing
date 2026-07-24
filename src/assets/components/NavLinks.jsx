const NAV_ITEMS = [
  { label: "Home", value: "home" },
  { label: "Favorites", value: "favorites" },
  { label: "About", value: "about" },
];

export default function NavLinks({ currentPage, onNavigate }) {
  return (
    <div className="flex items-center gap-1 text-sm font-medium sm:text-base">
      {NAV_ITEMS.map((item) => {
        const isActive = currentPage === item.value;

        return (
          <button
            key={item.label}
            type="button"
            onClick={() => onNavigate(item.value)}
            className={`rounded-full px-3 py-2 transition duration-300 ${
              isActive
                ? "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-200"
                : "text-slate-700 hover:text-purple-500 dark:text-slate-200"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
