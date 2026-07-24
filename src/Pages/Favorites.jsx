export default function Favorites({ favorites, onDelete }) {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Your favorites
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Messages you saved are shown here.
            </p>
          </div>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900/40 dark:text-purple-200">
            {favorites.length} saved
          </span>
        </div>

        {favorites.length === 0 ? (
          <p className="text-sm text-slate-600 dark:text-slate-300">
            No favorites yet. Save a message from Home and it will appear here.
          </p>
        ) : (
          <ul className="space-y-3">
            {favorites.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-slate-700 dark:bg-slate-800/70 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="text-sm text-slate-700 dark:text-slate-200">
                  {item.text}
                </p>
                <button
                  type="button"
                  onClick={() => onDelete(item.id)}
                  className="rounded-full border border-red-200 bg-white px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:border-red-800 dark:bg-slate-900 dark:text-red-300 dark:hover:bg-red-950"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
