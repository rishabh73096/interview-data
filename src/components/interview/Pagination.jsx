"use client";
import { useState, useEffect } from "react";

const ITEMS = Array.from({ length: 47 }, (_, i) => `Item ${i + 1}`);
const PAGE_SIZE = 5;

export default function Pagination() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);

  const totalPages = Math.ceil(ITEMS.length / PAGE_SIZE);

  // simulate fetching a fresh page of data whenever the page changes
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const start = (page - 1) * PAGE_SIZE;
      setCurrentItems(ITEMS.slice(start, start + PAGE_SIZE));
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [page]);

  return (
    <div className="max-w-sm mx-auto mt-8 p-4 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-center">Pagination</h2>

      <ul className="min-h-[180px] divide-y divide-gray-100 dark:divide-gray-800">
        {loading ? (
          <li className="py-8 text-center text-gray-400 animate-pulse">
            Loading...
          </li>
        ) : (
          currentItems.map((item) => (
            <li
              key={item}
              className="py-2 px-3 text-gray-700 dark:text-gray-200"
            >
              {item}
            </li>
          ))
        )}
      </ul>

      <div className="flex items-center justify-center flex-wrap gap-2 mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 rounded-md text-sm border border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`h-8 w-8 rounded-md text-sm border transition-colors ${
              num === page
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {num}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 rounded-md text-sm border border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Next
        </button>
      </div>
    </div>
  );
}
