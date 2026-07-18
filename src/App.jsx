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
      </div>
    </>
  );
}

export default App;