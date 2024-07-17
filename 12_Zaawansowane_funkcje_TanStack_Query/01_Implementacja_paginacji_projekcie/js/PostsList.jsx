import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async (page = 1, perPage = 10) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_per_page=${perPage}`);

  if (response.ok) {
    return response.json();
  } else {
    return null;
  }
};

export const PostsList = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const {
    data: posts,
    isError,
    isPending,
    error,
  } = useQuery({ queryKey: ['posts', { page, perPage }], queryFn: () => fetchPosts(page, perPage), retry: 3 });

  console.log(page);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};
