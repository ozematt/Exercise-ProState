import { useContext, useState } from 'react';
import { TasksContext } from './TasksContext.jsx';

export const TasksList = () => {
  const { tasks, handleTasksDone } = useContext(TasksContext);
  const [isChecked, setChecked] = useState(false);

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => handleTasksDone(task)}>Done</button>
          </li>
        ))}
      </ul>
    </>
  );
};
