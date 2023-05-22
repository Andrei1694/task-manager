import { useEffect } from "react";
import { useState } from "react";

export default function TaskList({
  tasks,
  handleTaskComplete,
  handleDeleteTask,
  setToEditTask,
<<<<<<< HEAD
}) => {
=======
}) {
>>>>>>> fb442058bddccaa49c67322149d8f4da0e5ce3b1
  const [onGoingTasks, setOnGoingTasks] = useState({});
  const [completedTasks, setCompletedTasks] = useState({});

  useEffect(() => {
    tasks && filterTasks(tasks);
  }, [tasks]);

  const filterTasks = (tasks) => {
    const onGoingTasksCopy = {};
    const completedTasksCopy = {};
    Object.keys(tasks).forEach((key) => {
      const task = tasks[key];
      const isCompleted = task.completed;
      if (isCompleted) completedTasksCopy[key] = task;
      else onGoingTasksCopy[key] = task;
    });

    setCompletedTasks(completedTasksCopy);
    setOnGoingTasks(onGoingTasksCopy);
  };
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8">
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Ongoing Tasks</h2>
        {Object.keys(onGoingTasks).length > 0 ? (
          <ul className="border border-gray-300 p-4">
            {Object.keys(onGoingTasks).map((key) => {
              const task = tasks[key];
              return (
                <li
                  key={`ongoing${task?.id}`}
                  className="flex items-center justify-between py-2"
                >
                  <span onClick={() => setToEditTask(task)}>
                    {task?.description}
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
              );
            })}
          </ul>
        ) : (
          <p className="text-gray-500">No ongoing tasks.</p>
        )}
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Completed Tasks</h2>
        {Object.keys(completedTasks).length > 0 ? (
          <ul className="border border-gray-300 p-4">
            {Object.keys(completedTasks).map((key) => {
              const task = tasks[key];
              return (
                <li
                  key={`completed${task?.id}`}
                  className="flex items-center justify-between py-2"
                >
                  <span className="line-through">{task?.description}</span>
                  <button
                    onClick={() => handleDeleteTask(task)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-gray-500">No completed tasks.</p>
        )}
      </div>
    </div>
  );
}
