import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
const theme = createTheme({
  /** Put your mantine theme override here */
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <MantineProvider theme={theme}>
    <App />
    </MantineProvider>
  </React.StrictMode>
);

reportWebVitals();
