/**
 * Reusable Button Component
 *
 * Props:
 * - label: Text displayed on the button.
 * - onClick: Function that runs when the button is clicked.
 * - className: Extra CSS/Tailwind classes.
 * - children: Custom content inside the button.
 * - icon: Optional icon displayed before the text.
 * - type: Button type (button, submit, reset).
 */

export default function Button({
  label,
  onClick,
  className = "",
  children,
  icon,
  type = "button",
}) {
  // Ensure `group` is present so we can style child label on hover (group-hover)
  const classes = `${className} ${className.includes("group") ? "" : "group"}`.trim();

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon ? <span className="inline-flex mr-2">{icon}</span> : null}
      {/* label wrapped so hover styles apply reliably */}
      <span className="text-current group-hover:text-slate-900 dark:group-hover:text-black-200">
        {children ?? label}
      </span>
    </button>
  );
}