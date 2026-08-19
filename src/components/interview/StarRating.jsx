"use client";
import { useState } from "react";

export default function StarRating({ totalStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm text-center dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4">Star Rating</h2>

      <div className="flex items-center justify-center gap-1">
        {Array.from({ length: totalStars }, (_, i) => i + 1).map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className={`text-3xl leading-none transition-colors ${
              star <= (hover || rating) ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
            }`}
          >
            ★
          </button>
        ))}
      </div>

      <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
        Your rating: {rating}
      </p>
    </div>
  );
}
