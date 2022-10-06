import React from 'react';
import ReactDOM from 'react-dom/client';
import'./index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import actors from './components/actor-array';
import TMDBService from './components/get-movie';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);