import React from "react";

/**
 * Brand component — shows the circular logo and site title.
 * Kept tiny and presentational to make `Navbar` easier to read.
 */
export default function Brand() {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600/10 text-xl font-bold text-purple-600">
        O
      </div>
      <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        One Good Thing
      </h1>
    </div>
  );
}
