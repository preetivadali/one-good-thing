import { useState } from "react";
import Navbar from "./assets/components/Navbar";

const BUTTON_LABELS = [
  "Add",
  "Motivation",
  "Calm",
  "Productivity",
  "Learn",
  "Smile",
  "Fact",
];

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async (label) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        `https://your-api-url.com/messages?category=${label}`
      );

      const data = await response.json();

      setMessage(data.message);
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center items-center h-[80vh] gap-6 pt-6">
        <h2 className="text-5xl font-bold text-center">
          One Click. One helpful thing
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {BUTTON_LABELS.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => handleButtonClick(label)}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-purple-500 hover:text-purple-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-purple-400 dark:hover:text-purple-300"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="h-72 w-[480px] rounded-3xl border border-gray-200 bg-white/90 px-6 py-5 text-center text-lg text-gray-700 shadow-sm backdrop-blur transition dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100">
          {loading
            ? "Loading message..."
            : message || "Click a button to load a message from the API box."}
        </div>

        <div className="flex justify-center gap-3 pt-4 flex-nowrap">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-red-300 bg-red-50 px-3 py-2 text-sm font-medium text-red-700 shadow-sm transition hover:bg-red-100 dark:border-red-700 dark:bg-red-900/30 dark:text-red-200"
          >
            <span>❤️</span>
            Save
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-900/30 dark:text-blue-200"
          >
            <span>📋</span>
            Copy
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-3 py-2 text-sm font-medium text-green-700 shadow-sm transition hover:bg-green-100 dark:border-green-700 dark:bg-green-900/30 dark:text-green-200"
          >
            <span>🔄</span>
            Another
          </button>
        </div>
      </div>
    </>
  );
}

export default App;