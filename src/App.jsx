import Navbar from "./assets/components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center items-center h-[80vh] gap-6">
        <h2 className="text-5xl font-bold text-center">
          One Click. One helpful thing
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {['Add', 'Motivation', 'Calm', 'Productivity', 'Learn', 'Smile', 'Fact'].map(
            (label) => (
              <button
                key={label}
                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-purple-500 hover:text-purple-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-purple-400 dark:hover:text-purple-300"
              >
                {label}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;