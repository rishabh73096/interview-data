"use client";
import { useState } from "react";

const NAMES = ["Amit", "Priya", "Rahul", "Sneha", "Vikram", "Anjali", "Rohit", "Neha"];

export default function SearchFilter() {
  const [query, setQuery] = useState("");

  const filtered = NAMES.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-center">Search Filter</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search name..."
        className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent"
      />

      <ul className="mt-4 divide-y divide-gray-100 dark:divide-gray-800">
        {filtered.length === 0 ? (
          <li className="py-6 text-center text-gray-400 text-sm">
            No results found
          </li>
        ) : (
          filtered.map((name) => (
            <li key={name} className="py-2 text-sm text-gray-700 dark:text-gray-200">
              {name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
