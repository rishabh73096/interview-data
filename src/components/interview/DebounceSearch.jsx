"use client";
import { useState, useEffect } from "react";

const NAMES = ["Amit", "Priya", "Rahul", "Sneha", "Vikram", "Anjali", "Rohit", "Neha"];

export default function DebounceSearch() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // debounce: wait 500ms after the user stops typing before updating debouncedQuery
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const filtered = NAMES.filter((name) =>
    name.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-center">Debounce Search</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
        className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent"
      />

      <p className="mt-2 text-xs text-gray-400">
        Searching for: {debouncedQuery || "(nothing yet)"}
      </p>

      <ul className="mt-2 divide-y divide-gray-100 dark:divide-gray-800">
        {filtered.map((name) => (
          <li key={name} className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
