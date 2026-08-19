"use client";
import { useState, useEffect, useRef, useCallback } from "react";

export default function InfiniteScroll() {
  const [items, setItems] = useState(() =>
    Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)
  );
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  const loadMore = useCallback(() => {
    setLoading(true);
    // simulate an API call
    setTimeout(() => {
      setItems((prev) => [
        ...prev,
        ...Array.from({ length: 10 }, (_, i) => `Item ${prev.length + i + 1}`),
      ]);
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loadMore, loading]);

  return (
    <div className="max-w-sm mx-auto mt-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 overflow-hidden">
      <h2 className="text-xl font-semibold p-4 text-center border-b border-gray-200 dark:border-gray-700">
        Infinite Scroll
      </h2>

      <ul className="h-72 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800">
        {items.map((item) => (
          <li key={item} className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
            {item}
          </li>
        ))}
        <li ref={loaderRef} className="py-4 text-center text-xs text-gray-400">
          {loading ? "Loading more..." : "Scroll down for more"}
        </li>
      </ul>
    </div>
  );
}
