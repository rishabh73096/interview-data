"use client";
import { useState, useEffect } from "react";

const PAGE_SIZE = 6;
const API_URL = "https://dummyjson.com/products";

export default function ProductPagination() {
  const [page, setPage] = useState(1);
  const [reloadToken, setReloadToken] = useState(0); // bump to force a refetch of the same page
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  useEffect(() => {
    const controller = new AbortController();
    const skip = (page - 1) * PAGE_SIZE;

    setStatus("loading");
    setErrorMsg("");

    fetch(`${API_URL}?limit=${PAGE_SIZE}&skip=${skip}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProducts(data.products || []);
        setTotal(data.total || 0);
        setStatus("success");
      })
      .catch((err) => {
        if (err.name === "AbortError") return; // page changed again before this settled
        setStatus("error");
        setErrorMsg(err.message || "Something went wrong");
      });

    return () => controller.abort();
  }, [page, reloadToken]);

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-center">Product Pagination (live API)</h2>

      <div className="min-h-70">
        {status === "loading" && (
          <div className="flex h-70 items-center justify-center text-sm text-gray-400 animate-pulse">
            Loading products...
          </div>
        )}

        {status === "error" && (
          <div className="flex h-70 flex-col items-center justify-center gap-3 text-center">
            <p className="text-sm text-red-500">{errorMsg}</p>
            <button
              onClick={() => setReloadToken((t) => t + 1)}
              className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        )}

        {status === "success" && (
          <ul className="divide-y divide-gray-100 dark:divide-gray-800">
            {products.map((product) => (
              <li key={product.id} className="flex items-center gap-3 py-2 px-1">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-10 w-10 rounded object-cover bg-gray-100"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate text-gray-700 dark:text-gray-200">
                    {product.title}
                  </p>
                  <p className="text-xs text-gray-400">${product.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          disabled={page === 1 || status === "loading"}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 rounded-md text-sm border border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Prev
        </button>
        <span className="text-sm text-gray-500">
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages || status === "loading"}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 rounded-md text-sm border border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Next
        </button>
      </div>
    </div>
  );
}
