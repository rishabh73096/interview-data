"use client";
import { useState, useRef } from "react";

export default function DragDropList() {
  const [items, setItems] = useState(["Learn JS", "Learn React", "Learn Next.js", "Build Projects", "Apply for Jobs"]);
  const dragIndex = useRef(null);
  const [overIndex, setOverIndex] = useState(null);

  const handleDragStart = (index) => {
    dragIndex.current = index;
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setOverIndex(index);
  };

  const handleDrop = (index) => {
    const from = dragIndex.current;
    if (from === null || from === index) return;

    const updated = [...items];
    const [moved] = updated.splice(from, 1);
    updated.splice(index, 0, moved);

    setItems(updated);
    dragIndex.current = null;
    setOverIndex(null);
  };

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-center">Drag & Drop List</h2>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={() => handleDrop(index)}
            onDragEnd={() => setOverIndex(null)}
            className={`px-3 py-2 rounded-md border text-sm cursor-move select-none transition-colors ${
              overIndex === index
                ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                : "border-gray-200 dark:border-gray-700"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
