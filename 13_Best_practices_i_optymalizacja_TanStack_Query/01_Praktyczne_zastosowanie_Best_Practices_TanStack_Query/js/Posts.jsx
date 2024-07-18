import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Post } from './Post.jsx';
import { useState } from 'react';
import { Comments } from './Comments.jsx';

//get posts fn
const getPosts = async () => {
  try {
    const { data: posts } = await axios.get('http://localhost:3001/posts');
    return posts;
  } catch (error) {
    console.error('There has been a problem:', error);
  }
};

//get comments fn
const getComments = async () => {
  try {
    const { data: comments } = await axios.get('http://localhost:3001/comments');
    return comments;
  } catch (error) {
    console.error('There has been a problem:', error);
  }
};

export const Posts = () => {
  //state with post id
  const [openPostId, setOpenPostId] = useState(null);

  //fn to set post id
  const toggleComments = (postId) => {
    setOpenPostId(openPostId === postId ? null : postId);
  };
  //style
  const style = {
    width: '100%',
    height: '100%',
    border: '1px solid black',
    marginBottom: '10px',
  };
  //post queries
  const {
    data: posts,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    retry: 3,
  });
  //comments queries
  const { data: comments } = useQuery({
    queryKey: ['comments'],
    queryFn: getComments,
    retry: 3,
  });
  //validation
  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  //UI
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
              <ul style={{ marginBottom: '5px' }}>
                {openPostId === post.id &&
                  comments
                    .filter((comment) => String(comment.postId) === post.id)
                    .map((comment) => (
                      <div key={comment.id}>
                        <li>{comment.body}</li>
                      </div>
                    ))}
              </ul>
              <Comments post={post.id} />
            </div>
          </div>
        ))}
        <button onClick={() => refetch()}>Odśwież</button>
      </ul>
    </>
  );
};
