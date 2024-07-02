import React from 'react';
import { createRoot } from 'react-dom/client';
import { UserManagementPanel } from './UserManagementPanel';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<UserManagementPanel />);
