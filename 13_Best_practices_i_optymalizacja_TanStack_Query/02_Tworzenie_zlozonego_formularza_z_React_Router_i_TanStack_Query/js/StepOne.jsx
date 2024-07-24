import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from './FormContext';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

//making schema for each step
const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
});

export const StepOne = () => {
  ////DATA
  const { handleAddData, data } = useFormContext();

  //added useForm to register fields,
  // added defaultsValues with state data,
  // added zod schema
  const { register, handleSubmit } = useForm({
    defaultValues: data,
    resolver: zodResolver(schema),
  });

  //navigate
  const navigate = useNavigate();

  ////LOGIC
  //handle submit data with navigate
  const onSubmit = (data) => {
    handleAddData(data);
    navigate('/address');
  };

  ////UI
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName')} placeholder="Imię" />
      <input {...register('lastName')} placeholder="Nazwisko" />
      <input {...register('email')} placeholder="Email" type="email" />
      <button type="submit">Dalej</button>
    </form>
  );
};
