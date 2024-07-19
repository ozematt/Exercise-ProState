import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StepOne } from './StepOne.jsx';
import { StepTwo } from './StepTwo.jsx';
import { StepThree } from './StepThree.jsx';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stepone" element={StepOne} />
        <Route path="/steptwo" element={StepTwo} />
        <Route path="/stepthree" element={StepThree} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
