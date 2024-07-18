import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Post } from './Post.jsx';
import { useState } from 'react';

const getPosts = async () => {
  try {
    const { data: posts } = await axios.get('http://localhost:3001/posts');
    return posts;
  } catch (error) {
    console.error('There has been a problem:', error);
  }
};

const getComments = async () => {
  try {
    const { data: comments } = await axios.get('http://localhost:3001/comments');
    return comments;
  } catch (error) {
    console.error('There has been a problem:', error);
  }
};

export const Posts = () => {
  const [section, setSection] = useState(false);
  console.log(section);
  const styleOnClick = {
    width: '100%',
    height: '100%',
    border: '1px solid black',
    marginBottom: '1rem',
  };

  const style = {
    width: '100%',
    height: '100%',
    border: '1px solid black',
    marginBottom: '1rem',
  };

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
          <div key={post.id}>
            <Post post={post} />
            <div style={style} onClick={() => setSection(!section)}>
              Comments
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};
