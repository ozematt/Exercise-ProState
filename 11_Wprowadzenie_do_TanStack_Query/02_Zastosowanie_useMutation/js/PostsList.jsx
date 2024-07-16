import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// axios.defaults.baseURL = 'http://localhost:3001';

const addPost = async (newPost) => {
  const { data } = await axios.post('/posts', newPost);
  return data;
};

const getPosts = async () => {
  const { data } = await axios.get('http://localhost:3001/posts');
  return data;
};
// console.log(JSON.stringify(getPosts()));

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
  console.log(data);
  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] }); //refreshing data after added
    },
  });

  return (
    <div>
      <form>
        <input {...register('title')} type="text" placeholder="Title" />
        <textarea {...register('body')} placeholder="Body" />
        <button>Add Post</button>
      </form>
      <ol>
        {data.map((post) => (
          <li style={{ padding: '20px' }} key={post.id}>
            <h6>{post.title}</h6>
            <p>{post.body}</p>
            <button>Delete post</button>
          </li>
        ))}
      </ol>
      {/* Przycisk do usuwania posta; użyj odpowiednio w kontekście listy postów */}
      {/* <button>Delete Post</button> */}
    </div>
  );
};
