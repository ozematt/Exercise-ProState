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
  const [openPostId, setOpenPostId] = useState(null);

  const toggleComments = (postId) => {
    setOpenPostId(openPostId === postId ? null : postId);
  };
  const style = {
    width: '100%',
    height: '100%',
    border: '1px solid black',
    marginBottom: '10px',
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
  console.log(posts);

  const { data: comments } = useQuery({
    queryKey: ['comments'],
    queryFn: getComments,
    retry: 3,
  });
  console.log(comments);

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
            <div style={{ marginBottom: '10px' }}>
              <p style={style} onClick={() => toggleComments(post.id)}>
                Comments
              </p>
              <ul>
                {openPostId === post.id &&
                  comments
                    .filter((comment) => String(comment.postId) === post.id)
                    .map((comment) => (
                      <div key={comment.id}>
                        <li>{comment.body}</li>
                      </div>
                    ))}
              </ul>
              <form action="">
                <input type="text" placeholder="Komentarz..." />
                <button>Dodaj</button>
              </form>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};
