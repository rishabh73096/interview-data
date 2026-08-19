"use client";
import { useState } from "react";

const TABS = [
  { label: "Home", content: "This is the Home tab content." },
  { label: "Profile", content: "This is the Profile tab content." },
  { label: "Settings", content: "This is the Settings tab content." },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-center">Tabs</h2>

      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {TABS.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm -mb-px border-b-2 transition-colors ${
              activeTab === index
                ? "border-blue-600 text-blue-600 font-medium"
                : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <p className="pt-4 text-sm text-gray-600 dark:text-gray-300">
        {TABS[activeTab].content}
      </p>
    </div>
  );
}
