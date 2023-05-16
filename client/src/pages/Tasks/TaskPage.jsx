import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";
import TaskModal from "./TaskModal.jsx";

import {
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useLazyGetMyTasksQuery,
  useUpdateTaskMutation,
} from "../../store/tasks/tasks.api.jsx";
import { useSelector } from "react-redux";
import { selectUserFromState } from "../../store/user/user.slice.jsx";

const TaskPage = () => {
  // const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createTask] = useCreateTaskMutation();
  const [getMyTasks, { data: tasks, isLoading }] = useLazyGetMyTasksQuery();
  // console.log(refetch);
  const [isEditMode, setIsEditMode] = useState(false);
  const { user } = useSelector(selectUserFromState);
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [toEditTask, setToEditTask] = useState(null);
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
  const handleTaskComplete = (task, isCompleting) => {
    let { _id, description, completed } = task;
    if (isCompleting) completed = true;
    const completeTask = {
      _id,
      completed,
      ...(description && { description }),
    };
    updateTask(completeTask);
    getMyTasks();
  };
  const handleDeleteTask = (task) => {
    const { _id } = task;
    deleteTask(_id);
    getMyTasks();
  };
  const setToEditTaskMode = (task) => {
    setToEditTask(task);
    setIsModalOpen(true);
  };
  return (
    <>
      <TaskModal
        task={toEditTask}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleTaskComplete}
      />
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
              <TaskList
                tasks={tasks}
                handleTaskComplete={(task) => handleTaskComplete(task, true)}
                handleDeleteTask={handleDeleteTask}
                setToEditTask={setToEditTaskMode}
              />
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

export default TaskPage;
