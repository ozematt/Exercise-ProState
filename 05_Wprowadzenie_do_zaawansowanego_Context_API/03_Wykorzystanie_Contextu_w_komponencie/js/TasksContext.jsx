import { createContext, useEffect, useState } from 'react';

export const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
  ////DATA
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  ////LOGIC
  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  //handle add new task
  const handleAddTasks = (event, newTask) => {
    event.preventDefault();
    setTasks((prevState) => [...prevState, { name: newTask, done: false, id: Date.now() }]);
  };
  //handle filtered array
  const handleTasksFilter = (taskFilter) => {
    setFilteredTasks(() => {
      switch (taskFilter) {
        case 'active':
          return tasks.filter((task) => !task.done);
        case 'done':
          return tasks.filter((task) => task.done);
        case 'all':
        default:
          return tasks;
      }
    });
  };

  //handle done task
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
