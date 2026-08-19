"use client";
import { useState, useRef, useEffect } from "react";

const LENGTH = 4;

export default function OtpInput() {
  const [otp, setOtp] = useState(Array(LENGTH).fill(""));
  const inputRefs = useRef([]);

  // focus the first box on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(-1);
    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && index < LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, LENGTH);
    const updated = pasted.split("");
    setOtp([...updated, ...Array(LENGTH - updated.length).fill("")]);
    inputRefs.current[Math.min(updated.length, LENGTH - 1)]?.focus();
  };

  const isComplete = otp.every((digit) => digit !== "");

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm text-center dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4">OTP Input</h2>

      <div className="flex items-center justify-center gap-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            maxLength={1}
            inputMode="numeric"
            className="h-12 w-12 text-center text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent"
          />
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        {isComplete ? `Entered OTP: ${otp.join("")}` : "Enter the 4-digit code"}
      </p>
    </div>
  );
}
