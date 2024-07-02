import React from 'react';
import { createRoot } from 'react-dom/client';
import { CommentForm } from './CommentForm';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<CommentForm />);
