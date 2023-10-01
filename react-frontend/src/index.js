import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

//importing App component
import App from './App'

// importing css file
import './index.css'
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);