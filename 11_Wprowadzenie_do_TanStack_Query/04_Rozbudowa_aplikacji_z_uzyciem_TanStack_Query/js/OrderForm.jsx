import { useForm } from 'react-hook-form';
import { TextField, Button, Typography } from '@mui/material';

export const OrderForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
