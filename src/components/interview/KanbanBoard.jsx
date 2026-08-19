"use client";
import { useState, useRef } from "react";

const INITIAL_COLUMNS = {
  todo: { title: "To Do", tasks: [{ id: "t1", text: "Design login page" }, { id: "t2", text: "Set up CI pipeline" }] },
  inProgress: { title: "In Progress", tasks: [{ id: "t3", text: "Build auth API" }] },
  done: { title: "Done", tasks: [{ id: "t4", text: "Project setup" }] },
};

export default function KanbanBoard() {
  const [columns, setColumns] = useState(INITIAL_COLUMNS);
  const [newTask, setNewTask] = useState("");
  const [overCol, setOverCol] = useState(null);
  const dragInfo = useRef(null); // { taskId, fromCol }

  const addTask = () => {
    if (!newTask.trim()) return;
    setColumns((prev) => ({
      ...prev,
      todo: { ...prev.todo, tasks: [...prev.todo.tasks, { id: `t${Date.now()}`, text: newTask }] },
    }));
    setNewTask("");
  };

  const handleDrop = (toCol) => {
    const info = dragInfo.current;
    setOverCol(null);
    if (!info || info.fromCol === toCol) return;

    setColumns((prev) => {
      const fromTasks = prev[info.fromCol].tasks;
      const task = fromTasks.find((t) => t.id === info.taskId);
      if (!task) return prev;

      return {
        ...prev,
        [info.fromCol]: { ...prev[info.fromCol], tasks: fromTasks.filter((t) => t.id !== info.taskId) },
        [toCol]: { ...prev[toCol], tasks: [...prev[toCol].tasks, task] },
      };
    });
    dragInfo.current = null;
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Kanban Board</h2>

      <div className="flex gap-2 mb-4 max-w-sm mx-auto">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="New task -> To Do"
          className="flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent"
        />
        <button
          onClick={addTask}
          className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.entries(columns).map(([colKey, col]) => (
          <div
            key={colKey}
            onDragOver={(e) => {
              e.preventDefault();
              setOverCol(colKey);
            }}
            onDragLeave={() => setOverCol((c) => (c === colKey ? null : c))}
            onDrop={() => handleDrop(colKey)}
            className={`rounded-lg border p-3 min-h-[220px] transition-colors ${
              overCol === colKey
                ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                : "border-gray-200 dark:border-gray-700"
            }`}
          >
            <h3 className="text-sm font-semibold mb-2 text-gray-600 dark:text-gray-300">
              {col.title} <span className="text-gray-400">({col.tasks.length})</span>
            </h3>

            <ul className="space-y-2">
              {col.tasks.map((task) => (
                <li
                  key={task.id}
                  draggable
                  onDragStart={() => {
                    dragInfo.current = { taskId: task.id, fromCol: colKey };
                  }}
                  className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm cursor-move select-none shadow-sm"
                >
                  {task.text}
                </li>
              ))}
              {col.tasks.length === 0 && (
                <li className="text-xs text-gray-400 text-center py-4">Drop tasks here</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
