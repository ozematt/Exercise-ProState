import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStateProvider } from './GlobalStateContext';
import { CounterComponent } from './CounterComponent';

const App = () => {
  return (
    <GlobalStateProvider>
      <div className="App">
        <h1>Debugging and Optimization Task</h1>
        <CounterComponent />
      </div>
    </GlobalStateProvider>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
