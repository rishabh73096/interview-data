"use client";
import { useState, useEffect } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  // close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    // lock body scroll while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm text-center dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4">Modal</h2>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"
      >
        Open Modal
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg p-6 w-full max-w-sm shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-2">I am a Modal</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Click outside, press Esc, or use the button below to close.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="px-3 py-1.5 rounded-md border border-gray-300 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
