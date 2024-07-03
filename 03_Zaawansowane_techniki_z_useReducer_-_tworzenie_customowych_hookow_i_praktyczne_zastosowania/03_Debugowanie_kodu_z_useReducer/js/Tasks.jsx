import React, { useReducer } from 'react';

const initialState = {
  tasks: [],
  taskCount: 0,
};

const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = { id: state.taskCount, name: action.name };

      return { ...state, tasks: [...state.tasks, newTask], taskCount: state.taskCount + 1 };

    case 'REMOVE_TASK':
      const filteredTasks = state.tasks.filter((task) => task.id !== action.taskId);

      return { ...state, tasks: filteredTasks };
    case 'RESET_TASKS':
      return { ...initialState };
    default:
      return state;
  }
};

export const Tasks = () => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  const handleAddTask = (taskName) => {
    if (taskName !== '') {
      dispatch({
        type: 'ADD_TASK',
        name: taskName,
      });
    }
  };

  const handleRemoveTask = (taskId) => {
    dispatch({
      type: 'REMOVE_TASK',
      taskId,
    });
  };

  const handleResetTasks = () => {
    dispatch({
      type: 'RESET_TASKS',
    });
  };

  return (
    <div>
      <button onClick={() => handleAddTask('New Task')}>Add Task</button>
      <ul>
        {state.tasks.map((task, index) => (
          <li key={index}>
            <span>{task.name}</span>
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleResetTasks}>Reset Tasks</button>
    </div>
  );
};
