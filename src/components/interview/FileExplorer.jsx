"use client";
import { useState } from "react";

const DEFAULT_TREE = {
  name: "src",
  type: "folder",
  children: [
    {
      name: "components",
      type: "folder",
      children: [
        { name: "Header.jsx", type: "file" },
        { name: "Footer.jsx", type: "file" },
        {
          name: "ui",
          type: "folder",
          children: [{ name: "Button.jsx", type: "file" }],
        },
      ],
    },
    {
      name: "pages",
      type: "folder",
      children: [
        { name: "index.jsx", type: "file" },
        { name: "about.jsx", type: "file" },
      ],
    },
    { name: "App.jsx", type: "file" },
    { name: "index.js", type: "file" },
  ],
};

// Recursive: a folder node just renders more <Node> for each child, so this
// handles arbitrary depth for free — no special-casing per level.
function Node({ node }) {
  const [isOpen, setIsOpen] = useState(false);

  if (node.type === "file") {
    return <div className="pl-5 py-1 text-sm text-gray-600 dark:text-gray-300">📄 {node.name}</div>;
  }

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), toggle())}
        className="py-1 text-sm font-medium cursor-pointer select-none"
      >
        {isOpen ? "📂" : "📁"} {node.name}
      </div>
      {isOpen && (
        <div className="pl-4 border-l border-gray-200 dark:border-gray-700 ml-1">
          {node.children.map((child, index) => (
            <Node key={`${child.name}-${index}`} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}

// Reusable: pass any { name, type, children } tree via `data`; falls back to a demo tree.
export default function FileExplorer({ data = DEFAULT_TREE }) {
  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-center">File Explorer</h2>
      <Node node={data} />
    </div>
  );
}
