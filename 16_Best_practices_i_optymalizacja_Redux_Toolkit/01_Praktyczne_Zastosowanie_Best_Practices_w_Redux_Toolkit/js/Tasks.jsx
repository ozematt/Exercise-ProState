import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, toggleTask } from './redux/actions';

export const Tasks = () => {
  const [newTask, setNewTask] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const completedTasks = [];
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
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => dispatch(toggleTask(task.id))} />
            {task.title}
            <button onClick={() => dispatch(removeTask(task.id))}>Usuń</button>
          </li>
        ))}
      </ul>
      <h2>Zakończone zadania</h2>
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};
