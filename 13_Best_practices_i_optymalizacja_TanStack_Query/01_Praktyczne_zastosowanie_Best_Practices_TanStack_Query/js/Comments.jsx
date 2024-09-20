import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

//add comments fn

export const Comments = ({ post }) => {
  //useQueryClient import
  const queryClient = useQueryClient();
  //handle form
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: Date.now().toString(),
      postId: post,
      body: '',
    },
  });
  //usemutation with invalidation
  const addCommentsMutation = useMutation({
    mutationFn: addComments,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['comments'],
      });
    },
  });
  //on submit add new comment to post with id
  const onSubmit = (data) => {
    addCommentsMutation.mutate(data);
    console.log(data);
  };
  //UI
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('body')} type="text" placeholder="Komentarz..." />
        <button type="submit">Dodaj</button>
      </form>
    </>
  );
};
