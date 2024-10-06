// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import App from './App';
import './styles/index.css'; // Import global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // You can keep React.StrictMode to catch potential issues
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
