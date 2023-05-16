import { useState } from "react";

const TaskList = ({
  tasks,
  handleTaskComplete,
  handleDeleteTask,
  setToEditTask,
}) => {
  const ongoingTasks = tasks ? tasks.filter((task) => !task.completed) : [];
  const completedTasks = tasks ? tasks.filter((task) => task.completed) : [];

  return (
    <div className="flex flex-col md:flex-row justify-center gap-8">
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Ongoing Tasks</h2>
        {ongoingTasks.length > 0 ? (
          <ul className="border border-gray-300 p-4">
            {ongoingTasks.map((task) => (
              <li
                key={`ongoing${task._id}`}
                className="flex items-center justify-between py-2"
              >
                <span onClick={() => setToEditTask(task)}>
                  {task.description}
                </span>
                <div>
                  <button
                    onClick={() => handleTaskComplete(task)}
                    className="text-green-500 hover:text-green-700"
                  >
                    Mark as complete
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No ongoing tasks.</p>
        )}
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Completed Tasks</h2>
        {completedTasks.length > 0 ? (
          <ul className="border border-gray-300 p-4">
            {completedTasks.map((task) => (
              <li
                key={`completed${task._id}`}
                className="flex items-center justify-between py-2"
              >
                <span className="line-through">{task.description}</span>
                <button
                  onClick={() => handleDeleteTask(task)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No completed tasks.</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
