import { useContext, useState } from 'react';
import { TasksContext } from './TasksContext.jsx';

export const AddTask = () => {
  const { tasks, handleAddTasks } = useContext(TasksContext);

  const [task, setTask] = useState('');
  console.log(task);

  return (
    <>
      <form onSubmit={(event) => handleAddTasks(event, task)}>
        <input
          value={task}
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
