import React, { useState } from "react";
import TaskForm from "./task.form.jsx";
import TaskList from "./task-list.component.jsx";
import TaskModal from "./task-modal.component.jsx";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { selectUserFromState } from "../../store/user/user.slice.jsx";
import { useSelector } from "react-redux";

const Home = () => {
  // console.log("render child");
  const [tasks, setTasks] = useState([]);
  const { user } = useSelector(selectUserFromState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };
  useEffect(() => {
    console.log(user);
  }, []);

  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  const onGoingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <>
      <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="container mx-auto py-4">
        <h1
          className="text-3xl font-bold mb-4"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          Task Manager(click event tester)
        </h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">On Going Tasks</h2>
            <TaskList tasks={onGoingTasks} onComplete={handleCompleteTask} />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Completed Tasks</h2>
            <TaskList tasks={completedTasks} onComplete={handleCompleteTask} />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Add New Task</h2>
          <TaskForm onAddTask={handleAddTask} />
        </div>
      </div>
    </>
  );
};

export default Home;
