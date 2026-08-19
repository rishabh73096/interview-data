"use client";
import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // keep the tab title in sync with the count
  useEffect(() => {
    document.title = `Count: ${count}`;
    return () => {
      document.title = "my-next-app";
    };
  }, [count]);

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm text-center dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4">Counter</h2>
      <p className="text-4xl font-bold mb-6">{count}</p>
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setCount((c) => c - 1)}
          className="h-9 w-9 rounded-md border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          -
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-3 h-9 rounded-md border border-gray-300 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Reset
        </button>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="h-9 w-9 rounded-md border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          +
        </button>
      </div>
    </div>
  );
}
