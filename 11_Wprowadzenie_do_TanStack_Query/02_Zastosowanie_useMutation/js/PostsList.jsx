import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from './app.jsx';

axios.defaults.baseURL = 'http://localhost:3001';

const addPost = async (newPost) => {
  const { data } = await axios.post('/posts', newPost);
  return data;
};

const getPosts = async () => {
  const { data } = await axios.get('/posts');
  return data;
};

const deletePost = async (id) => {
  const { data } = await axios.delete(`/posts/${id}`);
  return data;
};

export const PostsList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { title: '', body: '' } });

  const { data, error } = useQuery({ queryKey: 'posts', queryFn: getPosts }, { retry: 3 });

  const mutation = useMutation({ mutationFn: addPost });

  return (
    <div>
      <form>
        <input {...register('title')} type="text" placeholder="Title" />
        <textarea {...register('body')} placeholder="Body" />
        <button>Add Post</button>
      </form>
      {/* Przycisk do usuwania posta; użyj odpowiednio w kontekście listy postów */}
      {/* <button>Delete Post</button> */}
    </div>
  );
};
