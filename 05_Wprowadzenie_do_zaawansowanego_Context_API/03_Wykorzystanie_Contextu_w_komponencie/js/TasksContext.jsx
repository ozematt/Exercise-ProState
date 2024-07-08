import { createContext, useState } from 'react';

const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  handleAddTasks = (newTask) => {
    setTasks((prevState) => [...prevState, newTask]);
  };
  handleTasksFilter = (taskFilter) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== taskFilter.id));
  };

  handleTasksDone = (taskDone) => {
    setTasks((prevState) => prevState.map((item) => (item.id === taskDone.id ? taskDone : item)));
  };
  return (
    <>
      <TasksContext.Provider value={{ tasks, handleAddTasks, handleTasksFilter, handleTasksDone }}>
        {children}
      </TasksContext.Provider>
    </>
  );
};
