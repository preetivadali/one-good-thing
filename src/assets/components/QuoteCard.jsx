import Button from "./Button";

export default function QuoteCard({
  message,
  loading,
  feedback,
  buttonLabels,
  onButtonClick,
  onSave,
  onCopy,
  onAnother,
}) {

  // Show message inside the card
  let displayMessage = "Click a button to load a message from the API.";

  if (loading) {
    displayMessage = "Loading message...";
  } else if (message) {
    displayMessage = message;
  }


  return (
    <div className="flex flex-col items-center gap-6 px-4 py-8">

      {/* Page heading */}
      <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white">
        One Click. One helpful thing
      </h2>


      {/* Category buttons */}
      <div className="flex flex-wrap justify-center gap-3">

        {buttonLabels.map((label) => (
          <Button
            key={label}
            label={label}
            onClick={() => onButtonClick(label)}
            className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-gray-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-200 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:text-slate-200 dark:focus-visible:ring-purple-600"
          />
        ))}

      </div>


      {/* Message box */}
      <div className="h-72 w-full max-w-[480px] rounded-3xl border border-gray-200 bg-white/90 px-6 py-5 text-center text-lg text-gray-700 shadow-sm backdrop-blur transition dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100">

        {displayMessage}

      </div>


      {/* Action buttons */}
      <div className="flex gap-3">

        <Button
          onClick={onSave}
          icon="❤️"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-gray-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-200 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:text-slate-200 dark:focus-visible:ring-purple-600"
        >
          Save
        </Button>


        <Button
          onClick={onCopy}
          icon="📋"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-gray-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-200 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:text-slate-200 dark:focus-visible:ring-purple-600"
        >
          Copy
        </Button>


        <Button
          onClick={onAnother}
          icon="🔄"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-gray-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-200 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:text-slate-100 dark:focus-visible:ring-purple-600"
        >
          Another
        </Button>

      </div>


      {/* Feedback message */}
      {feedback && (
        <p className="text-sm text-purple-600">
          {feedback}
        </p>
      )}

    </div>
  );
}