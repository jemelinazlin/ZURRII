import React from 'react'; // Make sure React is imported
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import your styles
import App from './App.jsx'; // Import your App component

// Render the app in the root element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
