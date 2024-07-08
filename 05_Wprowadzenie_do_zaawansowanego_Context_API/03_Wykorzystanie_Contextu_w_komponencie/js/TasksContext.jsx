import { createContext, useState } from 'react';

export const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
  ////DATA
  const [tasks, setTasks] = useState([]);

  ////LOGIC
  const handleAddTasks = (event, newTask) => {
    event.preventDefault();
    setTasks((prevState) => [...prevState, { name: newTask, done: false, id: Date.now() }]);
  };

  const handleTasksFilter = (taskFilter) => {
    setTasks((prevState) => {
      if (taskFilter === 'active') {
        return prevState.filter((task) => !task.done);
      }
      if (taskFilter === 'done') {
        return prevState.filter((task) => task.done);
      }
      return prevState;
    });
  };

  const handleTasksDone = (taskDone) => {
    setTasks((prevState) => prevState.map((task) => (task.id === taskDone.id ? { ...task, done: true } : task)));
  };

  ////UI
  return (
    <>
      <TasksContext.Provider value={{ tasks, handleAddTasks, handleTasksFilter, handleTasksDone }}>
        {children}
      </TasksContext.Provider>
    </>
  );
};
