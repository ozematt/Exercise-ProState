import { useForm } from 'react-hook-form';

export const PostsList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: {} });

  return (
    <div>
      <form>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Body" />
        <button>Add Post</button>
      </form>
      {/* Przycisk do usuwania posta; użyj odpowiednio w kontekście listy postów */}
      {/* <button>Delete Post</button> */}
    </div>
  );
};
