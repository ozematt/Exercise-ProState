const addTask = (task) => ({
  type: 'tasks/addTask',
  payload: task,
});

const removeTask = (taskId) => ({
  type: 'tasks/removeTask',
  payload: taskId,
});

const toggleTask = (taskId) => ({
  type: 'tasks/toggleTask',
  payload: taskId,
});
