import { useContext } from 'react';
import { TasksContext } from './TasksContext.jsx';

export const TasksList = () => {
  ////DATA
  const { tasks, handleTasksDone } = useContext(TasksContext);
  ////UI
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
            {task.name}
            <button onClick={() => handleTasksDone(task)}>Done</button>
          </li>
        ))}
      </ul>
    </>
  );
};
