import { useMutation, useQuery } from '@tanstack/react-query';

export const Comments = () => {
  const { data, error, isPending, isError, refetch, isStale } = useQuery({
    queryKey: ['comments'],
    queryFn: () => {
      return fetch('http://localhost:3001/comments', {
        method: 'GET',
      }).then((response) => {
        return response.json();
      });
    },
    staleTime: 5000,
    refetchOnWindowFocus: true,
  });

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
      <button onClick={() => refetch()}>Refetch comments</button>
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
      {isStale ? <div>Data is not fresh</div> : <div>Data is up-to-date</div>}
    </div>
  );
};
