import React from 'react';
import { createRoot } from 'react-dom/client';
import { EventRegistrationForm } from './EventRegistrationForm';

const App = () => <EventRegistrationForm />;

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
