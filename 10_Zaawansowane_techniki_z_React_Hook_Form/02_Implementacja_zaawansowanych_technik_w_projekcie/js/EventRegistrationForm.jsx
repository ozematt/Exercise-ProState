import React from 'react';

import { TextField, RadioGroup, FormControlLabel, Button, Radio, FormControl, FormLabel, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email format'),
  options: z.enum(['online', 'inPerson']), /// <-----enum - one of options
  dietaryPreferences: z.string().optional(), /// <---------important with optional options
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
        helperText={errors.firstName?.message}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last name"
        {...register('lastName')}
        error={!!errors?.lastName}
        helperText={errors.lastName?.message}
        fullWidth
        margin="normal"
      />
      <TextField
        label="E-mail"
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
        margin="normal"
      />
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Participation Preference</FormLabel>
        <Controller
          defaultValue=""
          name="options"
          control={control}
          render={({ field }) => (
            <RadioGroup {...field} row>
              <FormControlLabel value="online" control={<Radio />} label="Online" />
              <FormControlLabel value="inPerson" control={<Radio />} label="In Person" />
            </RadioGroup>
          )}
        />
      </FormControl>

      {showPreferences === 'inPerson' && (
        <TextField
          label="Dietary Preferences"
          variant="outlined"
          error={!!errors.dietaryPreferences}
          helperText={errors.dietaryPreferences?.message}
          {...register('dietaryPreferences')}
          fullWidth
          margin="normal"
        />
      )}
      <Box>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Register
        </Button>
      </Box>
    </form>
  );
};
