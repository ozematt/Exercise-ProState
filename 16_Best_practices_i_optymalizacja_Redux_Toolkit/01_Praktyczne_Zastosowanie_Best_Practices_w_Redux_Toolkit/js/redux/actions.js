export const addTask = (task) => ({
  type: 'tasks/addTask',
  payload: task,
});

export const removeTask = (taskId) => ({
  type: 'tasks/removeTask',
  payload: taskId,
});

export const toggleTask = (taskId) => ({
  type: 'tasks/toggleTask',
  payload: taskId,
});
