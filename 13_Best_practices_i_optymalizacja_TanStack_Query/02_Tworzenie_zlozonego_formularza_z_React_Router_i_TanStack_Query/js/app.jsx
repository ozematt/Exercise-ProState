import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StepOne } from './StepOne.jsx';
import { StepTwo } from './StepTwo.jsx';
import { StepThree } from './StepThree.jsx';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { FormContext } from './FormContext.jsx';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <FormContext>
          <Routes>
            <Route path="/" element={<StepOne />} />
            <Route path="/steptwo" element={<StepTwo />} />
            <Route path="/stepthree" element={<StepThree />} />
          </Routes>
        </FormContext>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
