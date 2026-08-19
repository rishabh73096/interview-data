"use client";
import { useState, useEffect, useCallback, memo } from "react";

// Extracted + memoized so toggling/deleting one task doesn't re-render every other <TodoItem>.
// Without React.memo here, every setTasks() call in the parent would re-render the entire list.
const TodoItem = memo(function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-2 py-2">
      <span
        onClick={() => onToggle(task.id)}
        className={`flex-1 cursor-pointer text-sm ${
          task.done ? "line-through text-gray-400" : "text-gray-700 dark:text-gray-200"
        }`}
      >
        {task.text}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        className="text-xs text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
});

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // load saved tasks once on mount
  useEffect(() => {
    const saved = localStorage.getItem("todo-tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // persist tasks whenever they change
  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback(() => {
    setInput((currentInput) => {
      if (!currentInput.trim()) return currentInput;
      setTasks((prev) => [...prev, { id: Date.now(), text: currentInput, done: false }]);
      return "";
    });
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-center">Todo List</h2>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Add a task"
          className="flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent"
        />
        <button
          onClick={addTask}
          className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="mt-4 divide-y divide-gray-100 dark:divide-gray-800">
        {tasks.length === 0 && (
          <li className="py-6 text-center text-gray-400 text-sm">
            No tasks yet
          </li>
        )}
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
        ))}
      </ul>
    </div>
  );
}
