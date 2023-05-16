import React from "react";
import TaskForm from "./task.form";

const TaskModal = ({ isOpen, onClose, onSubmit, task }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={onClose}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <TaskForm
                  initialValues={{ description: task.description }}
                  onSubmit={({ description }) => {
                    onSubmit({ ...task, description });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskModal;
