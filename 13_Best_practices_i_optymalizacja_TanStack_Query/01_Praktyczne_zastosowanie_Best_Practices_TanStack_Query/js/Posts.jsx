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
  const { data: posts, isPanding, isError, error } = useQuery({ queryKey: ['posts'], queryFn: getPosts, retry: 3 });

  return null;
};
