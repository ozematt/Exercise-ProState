import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Post } from './Post.jsx';

const getPosts = async () => {
  try {
    const { data: posts } = await axios.get('http://localhost:3001/posts');
    return posts;
  } catch (error) {
    console.error('There has been a problem:', error);
  }
};

export const Posts = () => {
  const {
    data: posts,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    retry: 3,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};
