import { useMemo, useState } from 'react';

export const UserManagementPanel = () => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [filter, setFilter] = useState('');

  console.log(filter);
  console.log(commentsList);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCommentsList((prevState) => [...prevState, comment]);
    setComment('');
  };

  const filteredComments = () => commentsList.filter((comment) => comment.toLowerCase().includes(filter.toLowerCase()));
  console.log(filteredComments());
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={comment} type="text" onChange={(e) => setComment(e.target.value)} />
        <button type="submit">Dodaj</button>
        <br />
        <input value={filter} type="text" onChange={(e) => setFilter(e.target.value)} placeholder="Filter.." />

        <ul>{!filter ? commentsList.map((item, index) => <li key={index}>{item}</li>) : filteredComments()}</ul>
      </form>
    </>
  );
};
