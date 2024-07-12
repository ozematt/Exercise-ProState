import React from 'react';

import { TextField, RadioGroup, FormControlLabel, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  firstName: z.string().min(1, 'Pole wymagane'),
  lastName: z.string().min(1, 'Pole wymagane'),
  email: z.string().email('Email musi mieć poprawny format'),
});

export const EventRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="First name"
        {...register('firstName')}
        error={!!errors?.firstName}
        helperText={errors?.firstName && errors.firstName.message}
      />
      <TextField
        label="Last name"
        {...register('lastName')}
        error={!!errors?.lastName}
        helperText={errors?.lastName && errors.lastName.message}
      />
      <TextField label="E-mail" {...register('email')} />

      <RadioGroup>
        <FormControlLabel value="online" label="Online" />
        <FormControlLabel value="inPerson" label="In person" />
      </RadioGroup>

      <TextField label="Dietary preferences" />

      <Button type="submit">Register</Button>
    </form>
  );
};
