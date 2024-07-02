import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Comments } from './Comments';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Comments />
  </QueryClientProvider>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
