import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, selectAllTasks, selectCompletedTasks, toggleTask } from './redux/tasksSlice.js';

export const Tasks = () => {
  //state for newTask
  const [newTask, setNewTask] = useState('');
  //get all tasks
  const tasks = useSelector(selectAllTasks);
  //get completed tasks
  const completedTasks = useSelector(selectCompletedTasks);
  const dispatch = useDispatch();

  //added new Task
  const handleAddTask = () => {
    if (newTask) {
      dispatch(
        //dispatch addTask, make structure of task
        addTask({
          id: Math.floor(Math.random() * 1000),
          title: newTask,
          completed: false,
        })
      );
      //reset state
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
            <input type="checkbox" checked={task.completed} onChange={() => dispatch(toggleTask(task.id))} />
            {task.title}
            <button onClick={() => dispatch(removeTask(task.id))}>Usuń</button>
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
