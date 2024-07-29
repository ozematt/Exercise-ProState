import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, selectCompletedTasks } from './redux/store.js';

export const Tasks = () => {
  const [newTask, setNewTask] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const completedTasks = useSelector(selectCompletedTasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask) {
      dispatch(
        addTask({
          id: Math.floor(Math.random() * 1000),
          title: newTask,
          completed: false,
        })
      );
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>Lista Zadań</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Dodaj nowe zadanie"
      />
      <button onClick={handleAddTask}>Dodaj Zadanie</button>
      <ul>
        {tasks?.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} />
            {task.title}
            <button>Usuń</button>
          </li>
        ))}
      </ul>
      <h2>Zakończone zadania</h2>
      <ul>
        {completedTasks?.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};
