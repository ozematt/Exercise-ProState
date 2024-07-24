import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from './FormContext';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

//making schema for each step
const schema = z.object({
  street: z.string().min(1),
  houseNumber: z.string().min(1),
  city: z.string().min(1),
  postalCode: z.string().min(1),
});

export const StepTwo = () => {
  ////DATA
  //use context
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
  //handle submit data with navigation
  const onSubmit = (data) => {
    handleAddData(data);
    navigate('/confirmation');
  };

  ////UI
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('street')} placeholder="Ulica" />
      <input {...register('houseNumber')} placeholder="Numer domu/mieszkania" />
      <input {...register('city')} placeholder="Miasto" />
      <input {...register('postalCode')} placeholder="Kod pocztowy" />
      <button type="button" onClick={() => navigate('/personal-info')}>
        Wstecz
      </button>
      <button type="submit">Dalej</button>
    </form>
  );
};
