// List of pages shown in the navigation bar
const NAV_ITEMS = [
  {
    label: "Home",
    value: "home",
  },
  {
    label: "Favorites",
    value: "favorites",
  },
  {
    label: "About",
    value: "about",
  },
];


export default function NavLinks({ currentPage, onNavigate }) {

  return (
    <div className="flex items-center gap-1 text-sm font-medium sm:text-base">

      {NAV_ITEMS.map((item) => {

        // Check if this button is the current page
        const active = currentPage === item.value;

        return (
          <button
            key={item.value}
            type="button"

            // Change page when button is clicked
            onClick={() => onNavigate(item.value)}

            className={
              active
                ? "rounded-full px-3 py-2 bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-200"
                : "rounded-full px-3 py-2 text-slate-700 hover:text-purple-500 dark:text-slate-200"
            }
          >
            {item.label}
          </button>
        );

      })}

    </div>
  );
}