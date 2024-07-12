import React from 'react';

import { TextField, RadioGroup, FormControlLabel, Button, Radio } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  firstName: z.string().min(1, 'Pole wymagane'),
  lastName: z.string().min(1, 'Pole wymagane'),
  email: z.string().email('Email musi mieć poprawny format'),
  dietaryPreferences: z.string().min(10),
});

export const EventRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const showPreferences = watch('options');

  console.log(showPreferences);
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
      <TextField
        label="E-mail"
        {...register('email')}
        error={!!errors?.email}
        helperText={errors?.email && errors.email.message}
      />
      <Controller
        control={control}
        defaultValue=""
        render={({ field }) => (
          <RadioGroup {...field}>
            <FormControlLabel value="online" label="Online" control={<Radio />} />
            <FormControlLabel value="inPerson" label="In person" control={<Radio />} />
          </RadioGroup>
        )}
        name="options"
      />

      {showPreferences === 'inPerson' && (
        <Controller
          name="dietaryPreferences"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Dietary preferences"
              error={!!error}
              helperText={errors?.dietaryPreferences && errors.dietaryPreferences.message}
            />
          )}
        />
      )}

      <Button type="submit">Register</Button>
    </form>
  );
};
