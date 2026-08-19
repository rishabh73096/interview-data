"use client";
import { useState } from "react";

const DATA = [
  { title: "What is React?", content: "A JavaScript library for building UIs." },
  { title: "What is a Hook?", content: "A function that lets you use state in function components." },
  { title: "What is JSX?", content: "A syntax extension that lets you write HTML in JS." },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-center">Accordion</h2>

      <div className="divide-y divide-gray-100 dark:divide-gray-800">
        {DATA.map((item, index) => (
          <div key={item.title}>
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-3 text-left text-sm font-medium"
            >
              {item.title}
              <span className="ml-2 text-gray-400">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="pb-3 text-sm text-gray-500 dark:text-gray-400">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
