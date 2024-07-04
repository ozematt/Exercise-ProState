import { useCallback, useMemo, useState } from 'react';

export const UserManagementPanel = () => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [filter, setFilter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommentsList((prevState) => [...prevState, comment]);
    setComment('');
  };

  const filteredComments = useMemo(
    () => commentsList.filter((comment) => comment.toLowerCase().includes(filter.toLowerCase())),
    [filter, commentsList]
  );
  console.log(commentsList);
  return (
    <>
      <br />
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <br />
        <input
          style={{
            width: '500px',
            height: '50px',
          }}
          value={comment}
          type="text"
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          style={{
            padding: '12px',
          }}
          type="submit"
        >
          Dodaj
        </button>
      </form>
      <br />
      <input value={filter} type="text" onChange={(e) => setFilter(e.target.value)} placeholder="Filter.." />

      <ul>{!filter ? commentsList.map((item, index) => <li key={index}>{item}</li>) : filteredComments}</ul>
    </>
  );
};
