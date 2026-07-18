

/**
 * NavLinks component — renders a list of navigation links.
 * Keep the data in one place (NAV_ITEMS) to make additions simple.
 */
const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "Favorites", href: "#" },
  { label: "About", href: "#" },
];

export default function NavLinks() {
  return (
    <div className="flex items-center gap-0.5 text-lg font-medium">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="hover:text-purple-500 transition duration-300 px-0.5"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
