"use client";
import { useState, useEffect } from "react";

const SLIDES = [
  { id: 1, color: "bg-red-500", text: "Slide 1" },
  { id: 2, color: "bg-blue-500", text: "Slide 2" },
  { id: 3, color: "bg-green-500", text: "Slide 3" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  // auto-play every 3 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm text-center dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4">Carousel</h2>

      <div
        className={`h-36 rounded-md flex items-center justify-center text-white text-xl font-medium transition-colors ${SLIDES[index].color}`}
      >
        {SLIDES[index].text}
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          onClick={prevSlide}
          className="px-3 py-1.5 rounded-md border border-gray-300 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="px-3 py-1.5 rounded-md border border-gray-300 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Next
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-3">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === index ? "bg-gray-800 dark:bg-gray-200" : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
