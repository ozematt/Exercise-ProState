import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  fullName: z.string().min(1, 'Imię jest wymagane'),
  email: z.string().email('Email jest wymagany'),
  address: z.string().min(10, 'Musi zawirać min 10 znaków'),
  postalCode: z.string().regex(/^\d{2}-\d{3}$/, 'Niewłaściwy kod pocztowy'),
  quantity: z.coerce.number().min(1, 'Wartość conajmniej 1'),
});

export const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Order Form</h2>

      <div>
        <label htmlFor="fullName">Full Name</label>
        <input {...register('fullName')} type="text" id="fullName" name="fullName" />
        {errors?.fullName && <p>{errors.fullName.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input {...register('email')} type="email" id="email" name="email" />
        {errors?.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="address">Delivery Address</label>
        <input {...register('address')} type="text" id="address" name="address" />
        {errors?.address && <p>{errors.address.message}</p>}
      </div>

      <div>
        <label htmlFor="postalCode">Postal Code</label>
        <input {...register('postalCode')} type="text" id="postalCode" name="postalCode" />
        {errors?.postalCode && <p>{errors.postalCode.message}</p>}
      </div>

      <div>
        <label htmlFor="quantity">Quantity</label>
        <input {...register('quantity')} type="number" id="quantity" name="quantity" />
        {errors?.quantity && <p>{errors.quantity.message}</p>}
      </div>

      <button type="submit">Submit Order</button>
    </form>
  );
};
