"use client";
import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  // read saved preference (or system preference) once on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(saved ? saved === "dark" : prefersDark);
  }, []);

  // apply the class + persist whenever the theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm text-center dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4">Dark Mode Toggle</h2>

      <button
        onClick={() => setIsDark((prev) => !prev)}
        className="px-4 py-2 rounded-full border border-gray-300 text-sm flex items-center gap-2 mx-auto hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <span>{isDark ? "🌙" : "☀️"}</span>
        {isDark ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}
