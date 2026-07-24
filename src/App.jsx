import { useEffect, useState } from "react";
import Navbar from "./assets/components/Navbar";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import About from "./Pages/About";

const BUTTON_LABELS = [
  "Add",
  "Motivation",
  "Calm",
  "Productivity",
  "Learn",
  "Smile",
  "Fact",
];

const FAVORITES_STORAGE_KEY = "one-good-thing:favorites";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      return JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) ?? "[]");
    } catch {
      return [];
    }
  });
  const [feedback, setFeedback] = useState("");
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const handleButtonClick = async (label) => {
    setLoading(true);
    setMessage("");
    setFeedback("");

    try {
      const response = await fetch(
        `https://your-api-url.com/messages?category=${label}`
      );

      const data = await response.json();

      setMessage(data.message);
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      setFeedback("Save a message first.");
      return;
    }

    const alreadySaved = favorites.some((item) => item.text === trimmedMessage);

    if (alreadySaved) {
      setFeedback("That message is already in favorites.");
      return;
    }

    setFavorites((previous) => [
      { id: Date.now(), text: trimmedMessage },
      ...previous,
    ]);
    setFeedback("Saved to favorites.");
  };

  const handleCopy = async () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      setFeedback("There is no message to copy yet.");
      return;
    }

    try {
      await navigator.clipboard.writeText(trimmedMessage);
      setFeedback("Copied to clipboard.");
    } catch {
      setFeedback("Copy failed. Please try again.");
    }
  };

  const handleAnother = () => {
    const nextLabel =
      BUTTON_LABELS[Math.floor(Math.random() * BUTTON_LABELS.length)];
    handleButtonClick(nextLabel);
  };

  const handleDelete = (id) => {
    setFavorites((previous) => previous.filter((item) => item.id !== id));
    setFeedback("Removed from favorites.");
  };

  const renderPage = () => {
    if (currentPage === "favorites") {
      return <Favorites favorites={favorites} onDelete={handleDelete} />;
    }

    if (currentPage === "about") {
      return <About />;
    }

    return (
      <Home
        message={message}
        loading={loading}
        feedback={feedback}
        buttonLabels={BUTTON_LABELS}
        onButtonClick={handleButtonClick}
        onSave={handleSave}
        onCopy={handleCopy}
        onAnother={handleAnother}
      />
    );
  };

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </>
  );
}

export default App;