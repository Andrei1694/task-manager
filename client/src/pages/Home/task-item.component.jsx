import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const TaskItem = ({ task, onComplete }) => {
  const { id, title, description, completed } = task;

  return (
    <div
      className={`bg-white shadow-md p-4 rounded-lg mb-4 ${
        completed ? "line-through opacity-50" : ""
      }`}
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      {!completed && (
        <button
          onClick={() => onComplete(id)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          <FaCheckCircle className="inline-block mr-2" />
          Complete
        </button>
      )}
    </div>
  );
};

export default TaskItem;
