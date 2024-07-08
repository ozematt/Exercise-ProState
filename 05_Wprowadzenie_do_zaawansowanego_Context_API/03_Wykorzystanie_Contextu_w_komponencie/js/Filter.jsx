import { useContext } from 'react';
import { TasksContext } from './TasksContext.jsx';

export const Filter = () => {
  ////DATA
  const { handleTasksFilter } = useContext(TasksContext);
  ////UI
  return (
    <>
      <select name="filter" id="filter" onChange={(e) => handleTasksFilter(e.target.value)}>
        <option value="-1">Wszystkie</option>
        <option value="active">Aktywne</option>
        <option value="done">Wykonane</option>
      </select>
    </>
  );
};
