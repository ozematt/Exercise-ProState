import { useState } from 'react';

export const UserManagementPanel = () => {
  const [comment, setComment] = useState('');
  const [list, setList] = useState([]);
  console.log(comment);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList((prevState) => [...prevState, comment]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={comment} type="text" onChange={(e) => setComment(e.target.value)} />
        <button type="submit">Dodaj</button>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </form>
    </>
  );
};
