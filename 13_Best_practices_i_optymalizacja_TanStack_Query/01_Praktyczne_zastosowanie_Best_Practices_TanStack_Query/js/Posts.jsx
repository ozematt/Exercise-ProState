import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getPosts = async () => {
  try {
    const { data: posts } = await axios.get('http://localhost:3001/posts');
    return posts;
  } catch (error) {
    console.error('There has been a problem:', error);
  }
};

export const Posts = () => {
  const { data: posts, isPending, isError, error } = useQuery({ queryKey: ['posts'], queryFn: getPosts, retry: 3 });
  console.log(posts);
  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </>
  );
};
