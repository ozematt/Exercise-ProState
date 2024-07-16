import { useForm } from 'react-hook-form';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

const addPost = async (newPost) => {
  const { data } = await axios.post('/posts', newPost);
  return data;
};

export const PostsList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { title: '', body: '' } });

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
