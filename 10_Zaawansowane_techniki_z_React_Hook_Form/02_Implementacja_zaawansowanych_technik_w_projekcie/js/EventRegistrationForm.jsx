import React from 'react';

import { TextField, RadioGroup, FormControlLabel, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});

export const EventRegistrationForm = () => {
  const { register, handleSubmit, control } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form>
      <TextField label="First name" {...register('firstName')} />
      <TextField label="Last name" {...register('lastName')} />
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
