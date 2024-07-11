import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({});

export const Order = () => {
  const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });

  // Form submission handler placeholder
  const onSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission will go here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Order Form</h2>

      <div>
        <label htmlFor="fullName">Full Name</label>
        <input {...register('fullName')} type="text" id="fullName" name="fullName" />
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input {...register('email')} type="email" id="email" name="email" />
      </div>

      <div>
        <label htmlFor="address">Delivery Address</label>
        <input {...register('')} type="text" id="address" name="address" />
      </div>

      <div>
        <label htmlFor="postalCode">Postal Code</label>
        <input {...register('address')} type="text" id="postalCode" name="postalCode" />
      </div>

      <div>
        <label htmlFor="quantity">Quantity</label>
        <input {...register('quantity')} type="number" id="quantity" name="quantity" />
      </div>

      <button type="submit">Submit Order</button>
    </form>
  );
};
