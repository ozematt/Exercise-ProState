import { useContext, useState } from 'react';
import { TasksContext } from './TasksContext.jsx';

export const AddTask = () => {
  ///DATA
  const { tasks, handleAddTasks } = useContext(TasksContext);

  const [task, setTask] = useState('');

  ////UI
  return (
    <>
      <form onSubmit={(event) => handleAddTasks(event, task)}>
        <input
          value={tasks.name}
          name="name"
          type="text"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};
