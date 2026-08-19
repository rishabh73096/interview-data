"use client";
import { useState, useMemo } from "react";

const PRODUCTS = [
  { id: 1, name: "Wireless Mouse", price: 799, emoji: "🖱️" },
  { id: 2, name: "Mechanical Keyboard", price: 2999, emoji: "⌨️" },
  { id: 3, name: "USB-C Hub", price: 1499, emoji: "🔌" },
  { id: 4, name: "Laptop Stand", price: 1199, emoji: "💻" },
];

const TAX_RATE = 0.18;

export default function ShoppingCart() {
  const [cart, setCart] = useState({}); // { [productId]: quantity }

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const changeQty = (id, delta) => {
    setCart((prev) => {
      const nextQty = (prev[id] || 0) + delta;
      if (nextQty <= 0) {
        const { [id]: _removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: nextQty };
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const { [id]: _removed, ...rest } = prev;
      return rest;
    });
  };

  const cartItems = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, qty]) => ({ ...PRODUCTS.find((p) => p.id === Number(id)), qty }))
        .filter(Boolean),
    [cart]
  );

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cartItems]
  );
  const tax = Math.round(subtotal * TAX_RATE);
  const total = subtotal + tax;

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="rounded-lg border border-gray-200 shadow-sm p-4 dark:border-gray-700">
        <h2 className="text-lg font-semibold mb-3">Products</h2>
        <ul className="space-y-2">
          {PRODUCTS.map((product) => (
            <li key={product.id} className="flex items-center justify-between gap-2">
              <span className="text-sm">
                {product.emoji} {product.name} — ₹{product.price}
              </span>
              <button
                onClick={() => addToCart(product.id)}
                className="px-2 py-1 rounded-md bg-blue-600 text-white text-xs hover:bg-blue-700"
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-gray-200 shadow-sm p-4 dark:border-gray-700">
        <h2 className="text-lg font-semibold mb-3">Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-6">Cart is empty</p>
        ) : (
          <ul className="divide-y divide-gray-100 dark:divide-gray-800">
            {cartItems.map((item) => (
              <li key={item.id} className="py-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">{item.emoji} {item.name}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => changeQty(item.id, -1)}
                      className="h-6 w-6 rounded border border-gray-300 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      −
                    </button>
                    <span className="text-sm w-4 text-center">{item.qty}</span>
                    <button
                      onClick={() => changeQty(item.id, 1)}
                      className="h-6 w-6 rounded border border-gray-300 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">₹{item.price * item.qty}</span>
                </div>
              </li>
            ))}
          </ul>
        )}

        {cartItems.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 text-sm space-y-1">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Tax (18%)</span>
              <span>₹{tax}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
