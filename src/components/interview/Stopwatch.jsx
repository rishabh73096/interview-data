"use client";
import { useState, useEffect, useRef } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm text-center dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4">Stopwatch</h2>
      <p className="text-4xl font-bold font-mono mb-6">{formatTime(time)}</p>

      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setRunning(true)}
          className="px-3 py-1.5 rounded-md bg-green-600 text-white text-sm hover:bg-green-700"
        >
          Start
        </button>
        <button
          onClick={() => setRunning(false)}
          className="px-3 py-1.5 rounded-md bg-yellow-500 text-white text-sm hover:bg-yellow-600"
        >
          Pause
        </button>
        <button
          onClick={() => {
            setRunning(false);
            setTime(0);
          }}
          className="px-3 py-1.5 rounded-md border border-gray-300 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
