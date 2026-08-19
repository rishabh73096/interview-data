"use client";
import { useState, useEffect, useRef } from "react";

export default function Toast() {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef([]);

  // clear any pending timers on unmount
  useEffect(() => {
    return () => timersRef.current.forEach(clearTimeout);
  }, []);

  const showToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);

    const timer = setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
    timersRef.current.push(timer);
  };

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm text-center dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4">Toast Notification</h2>
      <button
        onClick={() => showToast("This is a toast message!")}
        className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"
      >
        Show Toast
      </button>

      <div className="fixed bottom-5 right-5 flex flex-col gap-2 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md shadow-lg"
          >
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  );
}
