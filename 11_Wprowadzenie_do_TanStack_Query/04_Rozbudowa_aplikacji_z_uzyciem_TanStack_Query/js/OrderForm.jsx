import { useForm } from 'react-hook-form';
import { TextField, Button, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useCartContext } from './CartContext.jsx';

export const OrderForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      address: '',
    },
  });
  const { cart } = useCartContext();

  const mutation = useMutation({
    mutationFn: (formData) => {
      return fetch('http://localhost:3001/orders', {
        method: 'POST',
        body: JSON.stringify(formData),
      }).then((res) => res.json());
    },
  });

  const onSubmit = (formData) => {
    mutation.mutate({ ...formData, cart });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5">Order form</Typography>
      <TextField margin="normal" fullWidth label="First Name" {...register('firstName', { required: true })} />
      <TextField margin="normal" fullWidth label="Last Name" {...register('lastName', { required: true })} />
      <TextField margin="normal" fullWidth label="Address" {...register('address', { required: true })} />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Place Order
      </Button>
    </form>
  );
};
