import { useEffect, useState } from "react";
import Navbar from "./assets/components/Navbar";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import About from "./Pages/About";
import BUTTON_LABELS from "./constants/buttonLabels";
import { API_URL, getFallbackMessage } from "./constants/apiConfig";

const STORAGE_KEY = "one-good-thing:favorites";

// Load favorites from Local Storage
const loadFavorites = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
};

function App() {
  // ======================
  // State
  // ======================
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState(loadFavorites);
  const [feedback, setFeedback] = useState("");
  const [currentPage, setCurrentPage] = useState("home");

  // ======================
  // Save favorites whenever they change
  // ======================
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  // ======================
  // Get a message from the API
  // ======================
  const getMessage = async (category) => {
    setLoading(true);
    setMessage("");
    setFeedback("");

    // If API_URL is still the placeholder, use a local fallback message.
    const isPlaceholder = API_URL.includes("your-api-url.com");

    if (isPlaceholder) {
      // short simulated delay for UX
      setTimeout(() => {
        setMessage(getFallbackMessage(category));
        setLoading(false);
      }, 300);

      return;
    }

    try {
      const response = await fetch(`${API_URL}?category=${encodeURIComponent(category)}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMessage(data.message ?? getFallbackMessage(category));
    } catch (err) {
      // On error, show a helpful local fallback rather than an empty error.
      setMessage(getFallbackMessage(category));
    } finally {
      setLoading(false);
    }
  };

  // ======================
  // Save current message
  // ======================
  const saveMessage = () => {
    const text = message.trim();

    if (!text) {
      return setFeedback("Save a message first.");
    }

    const exists = favorites.some((item) => item.text === text);

    if (exists) {
      return setFeedback("Message already saved.");
    }

    setFavorites([
      {
        id: Date.now(),
        text,
      },
      ...favorites,
    ]);

    setFeedback("Saved to favorites.");
  };

  // ======================
  // Copy message
  // ======================
  const copyMessage = async () => {
    if (!message.trim()) {
      return setFeedback("No message to copy.");
    }

    try {
      await navigator.clipboard.writeText(message);
      setFeedback("Copied!");
    } catch {
      setFeedback("Copy failed.");
    }
  };

  // ======================
  // Get another random message
  // ======================
  const anotherMessage = () => {
    const randomCategory =
      BUTTON_LABELS[Math.floor(Math.random() * BUTTON_LABELS.length)];

    getMessage(randomCategory);
  };

  // ======================
  // Delete favorite
  // ======================
  const deleteFavorite = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
    setFeedback("Removed from favorites.");
  };

  // ======================
  // Choose which page to display
  // ======================
  let page;

  switch (currentPage) {
    case "favorites":
      page = (
        <Favorites
          favorites={favorites}
          onDelete={deleteFavorite}
        />
      );
      break;

    case "about":
      page = <About />;
      break;

    default:
      page = (
        <Home
          message={message}
          loading={loading}
          feedback={feedback}
          buttonLabels={BUTTON_LABELS}
          onButtonClick={getMessage}
          onSave={saveMessage}
          onCopy={copyMessage}
          onAnother={anotherMessage}
        />
      );
  }

  return (
    <>
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      {page}
    </>
  );
}

export default App;