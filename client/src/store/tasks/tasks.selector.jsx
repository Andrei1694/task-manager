import { createSelector } from "@reduxjs/toolkit";

const selectTasks = (state) => state.tasks;
// export const selectTasksSelector = (state) => {
//   const tasksMap = state.tasks.tasks.reduce((acc, task) => {
//     const { _id, completed, description } = task;
//     acc[_id] = {
//       id: _id,
//       completed,
//       description,
//     };
//     return acc;
//   }, {});
//   return tasksMap;
// }; 5 renders

// 3 renders
export const selectTasksSelector = createSelector(selectTasks, ({ tasks }) => {
  console.log(tasks);
  const tasksMap = tasks.reduce((acc, task) => {
    const { _id, completed, description } = task;
    acc[_id] = {
      id: _id,
      completed,
      description,
    };
    return acc;
  }, {});
  return tasksMap;
});
