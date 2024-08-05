// src/components/TodoItem.js
import React from "react";
import { CheckIcon } from '@heroicons/react/outline'; // Importa o ícone do Heroicons
function TodoItem({ todo, toggleComplete }) {
  return (
    <li
      className={`flex items-center justify-between bg-white p-4 rounded shadow mb-2 ${
        todo.completed ? "line-through text-gray-500" : ""
      }`}
    >
      <span>{todo.text}</span>
      <button
        onClick={() => toggleComplete(todo.id)}
        className={`ml-4 py-1 px-3 rounded ${
          todo.completed ? "bg-green-500 text-white" : "bg-gray-300"
        }`}
      >
        {todo.completed ? (
          <CheckIcon className="h-5 w-5 text-white" />
        ) : (
          "Complete"
        )}
      </button>
    </li>
  );
}

export default TodoItem;
