import { Box, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export const StepTwo = () => {
  return (
    <>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <TextField type="text" placeholder="Ulica" />
        <TextField type="text" placeholder="Numerdomu/mieszkania" />
        <TextField type="text" placeholder="Miasto" />
        <TextField type="text" placeholder="Kod pocztowy" />
        <Box>
          <Link style={{ padding: '10px' }} to="/steptwo">
            Wstecz
          </Link>
          <Link style={{ padding: '10px' }} to="/stepthree">
            Dalej
          </Link>
        </Box>
      </form>
    </>
  );
};
