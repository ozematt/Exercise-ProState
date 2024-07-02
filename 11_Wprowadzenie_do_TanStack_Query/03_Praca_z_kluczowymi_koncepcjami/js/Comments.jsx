import { useMutation } from '@tanstack/react-query';

export const Comments = () => {
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
    </div>
  );
};
