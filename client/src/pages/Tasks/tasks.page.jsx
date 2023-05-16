import React, { useEffect, useState } from "react";
import TaskForm from "./task.form.jsx";
import TaskList from "./task-list.component.jsx";
import TaskModal from "./task-modal.component.jsx";
import {
  useCreateTaskMutation,
  useLazyGetMyTasksQuery,
  useUpdateTaskMutation,
} from "../../store/tasks/tasks.api.jsx";
import { useSelector } from "react-redux";
import { selectUserFromState } from "../../store/user/user.slice.jsx";

const Home = () => {
  // const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createTask] = useCreateTaskMutation();
  const [getMyTasks, { data: tasks, isLoading }] = useLazyGetMyTasksQuery();
  // console.log(refetch);
  const [isEditMode, setIsEditMode] = useState(false);
  const { user } = useSelector(selectUserFromState);
  const [updateTask] = useUpdateTaskMutation();

  useEffect(() => {
    user && getMyTasks();
  }, [user]);

  const onSubmit = (e) => {
    console.log(e);
    if (isEditMode) {
      return;
    }
    createTask(e);
    getMyTasks();
  };
  const handleTaskComplete = (task) => {
    const { _id } = task;
    const completeTask = {
      _id,
      completed: true,
    };
    updateTask(completeTask);
    getMyTasks();
  };
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
            {!isLoading ? (
              <TaskList tasks={tasks} handleTaskComplete={handleTaskComplete} />
            ) : null}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Add New Task</h2>
          <TaskForm onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default Home;
