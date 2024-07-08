import { createContext, useState } from 'react';

export const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  console.log(tasks);

  const handleAddTasks = (event, newTask) => {
    event.preventDefault();
    setTasks((prevState) => [...prevState, { name: newTask, done: false, id: Date.now() }]);
  };
  const handleTasksFilter = (taskFilter) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== taskFilter.id));
  };

  const handleTasksDone = (taskDone) => {
    setTasks((prevState) => prevState.map((task) => (task.id === taskDone.id ? { ...task, done: true } : task)));
  };
  return (
    <>
      <TasksContext.Provider value={{ tasks, handleAddTasks, handleTasksFilter, handleTasksDone }}>
        {children}
      </TasksContext.Provider>
    </>
  );
};
