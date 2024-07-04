import { useCallback, useMemo, useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const UserManagementPanel = () => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [filter, setFilter] = useState('');

  const debouncedFilter = useDebounce(filter, 300);

  console.log(debouncedFilter);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (comment.trim().length !== 0) {
        setCommentsList((prevState) => [...prevState, comment]);
        setComment('');
      }
    },
    [commentsList, comment]
  );

  const filteredComments = useMemo(
    () => commentsList.filter((comment) => comment.toLowerCase().includes(debouncedFilter.toLowerCase())),
    [debouncedFilter, commentsList]
  );

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

      <ul>{!debouncedFilter ? commentsList.map((item, index) => <li key={index}>{item}</li>) : filteredComments}</ul>
    </>
  );
};
