import React, { useReducer } from 'react';

const initialState = {
  tasks: [],
  taskCount: 0,
};

const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = { id: state.taskCount, name: action.name };
      return { ...state, tasks: state.tasks.push(newTask), taskCount: state.taskCount + 1 };
    case 'REMOVE_TASK':
      const filteredTasks = state.tasks.filter((task) => task.id !== action.taskId); // Błąd: Nieprawidłowe porównanie
      return { ...state, tasks: filteredTasks, taskCount: state.taskCount - 1 }; // Błąd: Brakujący spread operator
    case 'RESET_TASKS':
      return action.payload; // Błąd: Powinien być zwrócony nowy obiekt stanu
    default:
      return state;
  }
};

export const Tasks = () => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  const handleAddTask = (taskName) => {
    if (taskName !== '') {
      // Błąd: Brakująca obsługa pustej nazwy zadania
      dispatch({
        type: 'ADD_TASK',
        name: taskName,
      });
    }
  };

  const handleRemoveTask = (taskId) => {
    dispatch({
      type: 'REMOVE_TASK',
      taskId: taskId,
    });
  };

  const handleResetTasks = () => {
    dispatch({
      type: 'RESET_TASKS',
      payload: initialState,
    });
  };

  // Błąd: Brakująca funkcja do resetowania zadań

  return (
    <div>
      <button onClick={() => handleAddTask('New Task')}>Add Task</button> {/* Błąd: Nieprawidłowe wywołanie funkcji */}
      {state.tasks.map((task, index) => (
        <div key={index}>
          <span>{task.name}</span> {/* Błąd: Nieprawidłowe odwołanie do właściwości obiektu */}
          <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
        </div>
      ))}
      <button onClick={handleResetTasks}>Reset Tasks</button>
    </div>
  );
};
