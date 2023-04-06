import { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleNewTaskTitleChange = (e) => {
    setNewTaskTitle(e.target.value);
  };

  const handleTaskAdd = (e) => {
    e.preventDefault();
    if (!newTaskTitle) return;
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: newTaskTitle,
        completed: false,
      },
    ]);
    setNewTaskTitle("");
  };

  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleTaskComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  const ongoingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="flex flex-col md:flex-row justify-center gap-8">
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Ongoing Tasks</h2>
        {ongoingTasks.length > 0 ? (
          <ul className="border border-gray-300 p-4">
            {ongoingTasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between py-2"
              >
                <span>{task.title}</span>
                <div>
                  <button
                    onClick={() => handleTaskComplete(task.id)}
                    className="text-green-500 hover:text-green-700"
                  >
                    Mark as complete
                  </button>
                  <button
                    onClick={() => handleTaskDelete(task.id)}
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
                key={task.id}
                className="flex items-center justify-between py-2"
              >
                <span className="line-through">{task.title}</span>
                <button
                  onClick={() => handleTaskDelete(task.id)}
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
