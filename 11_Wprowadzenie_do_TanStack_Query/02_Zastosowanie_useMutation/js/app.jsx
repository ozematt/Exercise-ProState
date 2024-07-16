import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PostsList } from './PostsList';

export const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <PostsList />
  </QueryClientProvider>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
