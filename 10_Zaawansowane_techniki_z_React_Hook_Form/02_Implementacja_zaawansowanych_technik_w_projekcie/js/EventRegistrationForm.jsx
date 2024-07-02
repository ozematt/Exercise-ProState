import React from 'react';

import { TextField, RadioGroup, FormControlLabel, Button } from '@mui/material';

export const EventRegistrationForm = () => {
  return (
    <form>
      <TextField label="First name" />
      <TextField label="Last name" />
      <TextField label="E-mail" />

      <RadioGroup>
        <FormControlLabel value="online" label="Online" />
        <FormControlLabel value="inPerson" label="In person" />
      </RadioGroup>

      <TextField label="Dietary preferences" />

      <Button type="submit">Register</Button>
    </form>
  );
};
