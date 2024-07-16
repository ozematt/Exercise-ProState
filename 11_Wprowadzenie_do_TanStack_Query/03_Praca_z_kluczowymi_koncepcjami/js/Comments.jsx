import { useMutation, useQuery } from '@tanstack/react-query';

export const Comments = () => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ['comments'],
    queryFn: () => {
      return fetch('http://localhost:3001/comments', {
        method: 'GET',
      }).then((response) => {
        return response.json();
      });
    },
  });
  console.log(data);

  const addComment = useMutation({
    mutationFn: () => {
      return fetch('http://localhost:3001/comments', {
        method: 'POST',
        body: JSON.stringify({
          author: `User ${Math.random() * 10}`,
          content: `Comment ${Math.random()}`,
        }),
      }).then((res) => res.json());
    },
  });

  return (
    <div>
      <button onClick={addComment.mutate}>Add random comment</button>
      {isPending && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {data && (
        <ol>
          {data.map((comment) => (
            <li style={{ padding: '10px' }} key={comment.id}>
              <h6>{comment.content}</h6>
              <p>{comment.author}</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};
