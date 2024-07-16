import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const addPost = async (newPost) => {
  const { data } = await axios.post('http://localhost:3001/posts', newPost);
  return data;
};

const getPosts = async () => {
  const { data } = await axios.get('http://localhost:3001/posts');
  return data;
};

const deletePost = async (id) => {
  const { data } = await axios.delete(`http://localhost:3001/posts/${id}`);
  return data;
};

export const PostsList = () => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { title: '', body: '' } });

  const { data, error, isPending, isError } = useQuery({ queryKey: ['posts'], queryFn: getPosts, retry: 3 });

  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] }); //refreshing data after added
    },
  });

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] }); // Refreshing data after deleted
    },
  });

  const onSubmit = (newPost) => {
    mutation.mutate(newPost);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('title')} type="text" placeholder="Title" />
        <textarea {...register('body')} placeholder="Body" />
        <button type="submit">Add Post</button>
      </form>
      {isPending && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {data && (
        <ol>
          {data.map((post) => (
            <li style={{ padding: '20px' }} key={post.id}>
              <h6>{post.title}</h6>
              <p>{post.body}</p>
              <button onClick={() => deletePostMutation.mutate(post.id)}>Delete post</button>
              {deletePostMutation.isPending && <span>Deleting...</span>}
              {deletePostMutation.isError && <span>Error: {deletePostMutation.error.message}</span>}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};
