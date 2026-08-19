"use client";
import { useState } from "react";

const USERS = [
  { id: 1, name: "Amit Sharma", role: "Frontend Dev", experience: 3 },
  { id: 2, name: "Priya Verma", role: "Backend Dev", experience: 5 },
  { id: 3, name: "Rahul Singh", role: "Full Stack Dev", experience: 2 },
  { id: 4, name: "Sneha Gupta", role: "UI/UX Designer", experience: 4 },
  { id: 5, name: "Vikram Rao", role: "DevOps Engineer", experience: 6 },
];

export default function DataTable() {
  const [filterText, setFilterText] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "name", direction: "asc" });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const filtered = USERS.filter((user) =>
    user.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    const { key, direction } = sortConfig;
    const factor = direction === "asc" ? 1 : -1;
    if (a[key] < b[key]) return -1 * factor;
    if (a[key] > b[key]) return 1 * factor;
    return 0;
  });

  const columns = [
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
    { key: "experience", label: "Exp (yrs)" },
  ];

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-center">Data Table</h2>

      <input
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Filter by name..."
        className="w-full mb-4 rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent"
      />

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className="py-2 px-2 cursor-pointer select-none font-medium text-gray-600 dark:text-gray-300"
                >
                  {col.label}
                  {sortConfig.key === col.key && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "▲" : "▼"}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {sorted.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="py-6 text-center text-gray-400">
                  No matching rows
                </td>
              </tr>
            ) : (
              sorted.map((user) => (
                <tr key={user.id}>
                  <td className="py-2 px-2">{user.name}</td>
                  <td className="py-2 px-2 text-gray-500 dark:text-gray-400">{user.role}</td>
                  <td className="py-2 px-2 text-gray-500 dark:text-gray-400">{user.experience}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
