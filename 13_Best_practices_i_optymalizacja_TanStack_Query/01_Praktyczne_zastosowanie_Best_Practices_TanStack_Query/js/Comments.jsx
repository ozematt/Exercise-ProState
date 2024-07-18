import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const addComments = async (comment) => {
  try{
    const { data: result } = await axios.post('http://localhost:3001/comments', comment);
    console.log(result);
  }catch(error){
    console.error('There has been a problem:', error);
  }
}

export const Comments = ({ post }) => {


  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: Date.now().toString(),
      postId: post,
      body: '',
    },
  });

  const addCommentsMutation = useMutation({
    mutationFn: addComments,
    onSuccess:
  })

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('body')} type="text" placeholder="Komentarz..." />
        <button type="submit">Dodaj</button>
      </form>
    </>
  );
};
