export const selectTasksSelector = (state) => {
  const tasksMap = state.tasks.tasks.reduce((acc, task) => {
    const { _id, completed, description } = task;
    acc[_id] = {
      id: _id,
      completed,
      description,
    };
    return acc;
  }, {});
  return tasksMap;
};
