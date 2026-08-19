"use client";
import { useState, useRef, useEffect } from "react";

const FRUITS = [
  "Apple", "Apricot", "Banana", "Blueberry", "Cherry",
  "Grape", "Guava", "Kiwi", "Lychee", "Mango",
  "Orange", "Papaya", "Pineapple", "Strawberry", "Watermelon",
];

export default function Autocomplete() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef(null);

  const suggestions =
    query.trim() === ""
      ? []
      : FRUITS.filter((fruit) =>
          fruit.toLowerCase().includes(query.toLowerCase())
        );

  // close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectSuggestion = (value) => {
    setQuery(value);
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!isOpen || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev <= 0 ? suggestions.length - 1 : prev - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      selectSuggestion(suggestions[activeIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 relative"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">Autocomplete</h2>

      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
          setActiveIndex(-1);
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder="Search a fruit..."
        className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent"
      />

      {isOpen && suggestions.length > 0 && (
        <ul className="absolute left-6 right-6 mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-48 overflow-y-auto z-10">
          {suggestions.map((fruit, index) => (
            <li
              key={fruit}
              onMouseDown={() => selectSuggestion(fruit)}
              className={`px-3 py-2 text-sm cursor-pointer ${
                index === activeIndex
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {fruit}
            </li>
          ))}
        </ul>
      )}

      {isOpen && query.trim() !== "" && suggestions.length === 0 && (
        <p className="absolute left-6 right-6 mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg px-3 py-2 text-sm text-gray-400 z-10">
          No matches found
        </p>
      )}
    </div>
  );
}
