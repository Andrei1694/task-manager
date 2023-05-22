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

import { selectTasksSelector } from "../../store/tasks/tasks.selector.jsx";
import { useCallback } from "react";
import { selectUserFromState } from "../../store/user/user.selector.jsx";

export default function TaskPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createTask] = useCreateTaskMutation();
  const [getMyTasks, { isLoading }] = useLazyGetMyTasksQuery();
  const [isEditMode, setIsEditMode] = useState(false);
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [toEditTask, setToEditTask] = useState(null);
  const tasks = useSelector(selectTasksSelector);
  const { user } = useSelector(selectUserFromState);
  useEffect(() => {
    user && getMyTasks();
  }, [user]);

  const onSubmit = (e) => {
    if (isEditMode) {
      return;
    }
    createTask(e);
    getMyTasks();
  };

  const handleTaskComplete = useCallback(
    async (task, isCompleting) => {
      console.log(task);
      let { id, description, completed } = task;
      if (isCompleting) completed = true;
      const completeTask = {
        id,
        completed,
        ...(description && { description }),
      };

      await updateTask(completeTask);
      await getMyTasks();
    },
    [tasks]
  );
  const handleDeleteTask = useCallback(
    async (task) => {
      const { id } = task;
      console.log(id);
      await deleteTask(id);
      await getMyTasks();
    },
    [tasks]
  );
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
}
