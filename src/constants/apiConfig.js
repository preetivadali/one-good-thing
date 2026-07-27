// API configuration and safe fallback messages for local development.
// Set `API_URL` to your real endpoint in production or .env and keep this placeholder for development.
export const API_URL = "https://your-api-url.com/messages";

// Friendly fallback messages keyed by category.
export const FALLBACK_MESSAGES = {
  Add: "Here's something small you can add to your day: take three deep breaths.",
  Motivation: "You are doing better than you think — keep going.",
  Calm: "This moment is yours — breathe, relax, and be kind to yourself.",
  Productivity: "Break your work into 25-minute sprints and take short breaks.",
  Learn: "Try reading one paragraph from something new today.",
  Smile: "Share a small compliment with someone and see how it lights up their face.",
  Fact: "Honey never spoils — archaeologists have found edible honey in ancient tombs.",
};

export function getFallbackMessage(category) {
  return FALLBACK_MESSAGES[category] ?? "Here's a small, helpful thought for your day.";
}

export default { API_URL, FALLBACK_MESSAGES, getFallbackMessage };
