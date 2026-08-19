"use client";
import { useState } from "react";

export default function FormValidation() {
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!values.name.trim()) newErrors.name = "Name is required";

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!values.password) {
      newErrors.password = "Password is required";
    } else if (values.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setSubmitted(Object.keys(newErrors).length === 0);
  };

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-center">Form Validation</h2>

      <form onSubmit={handleSubmit} className="space-y-3" noValidate>
        <div>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent"
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent"
          />
          {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"
        >
          Submit
        </button>

        {submitted && (
          <p className="text-sm text-green-600 text-center">Form submitted successfully!</p>
        )}
      </form>
    </div>
  );
}
