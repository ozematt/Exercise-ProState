import { TextField } from '@mui/material';

export const StepTwo = () => {
  return (
    <>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <TextField type="text" placeholder="Ulica" />
        <TextField type="text" placeholder="Numerdomu/mieszkania" />
        <TextField type="text" placeholder="Miasto" />
        <TextField type="text" placeholder="Kod pocztowy" />
      </form>
    </>
  );
};
