import { createContext, useState } from 'react';

export const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
  ////DATA
  const [tasks, setTasks] = useState([]);

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  ////LOGIC
  const handleAddTasks = (event, newTask) => {
    event.preventDefault();
    setTasks((prevState) => [...prevState, { name: newTask, done: false, id: Date.now() }]);
  };

  const handleTasksFilter = (taskFilter) => {
    setFilteredTasks((prevState) => {
      switch (taskFilter) {
        case 'active':
          return prevState.filter((task) => !task.done);
        case 'done':
          return prevState.filter((task) => task.done);
        case 'all':
        default:
          return prevState;
      }
    });
  };

  const handleTasksDone = (taskDone) => {
    setTasks((prevState) => prevState.map((task) => (task.id === taskDone.id ? { ...task, done: true } : task)));
  };

  ////UI
  return (
    <>
      <TasksContext.Provider value={{ tasks, filteredTasks, handleAddTasks, handleTasksFilter, handleTasksDone }}>
        {children}
      </TasksContext.Provider>
    </>
  );
};
