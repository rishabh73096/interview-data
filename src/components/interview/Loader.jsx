"use client";
export default function Loader() {
  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm text-center dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4">Loader</h2>
      <div className="h-10 w-10 mx-auto rounded-full border-4 border-gray-200 border-t-blue-600 animate-spin dark:border-gray-700 dark:border-t-blue-500" />
    </div>
  );
}
