"use client";
import { useState, useEffect } from "react";

export default function ApiFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-center">API Fetch</h2>

      {loading && (
        <p className="text-center text-sm text-gray-400 animate-pulse">Loading...</p>
      )}

      {error && (
        <p className="text-center text-sm text-red-500">{error}</p>
      )}

      {!loading && !error && (
        <ul className="divide-y divide-gray-100 dark:divide-gray-800">
          {users.map((user) => (
            <li key={user.id} className="py-2 text-sm">
              <p className="font-medium text-gray-800 dark:text-gray-100">{user.name}</p>
              <p className="text-gray-400 text-xs">{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
