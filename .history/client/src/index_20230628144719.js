import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {io} from "socket.io-client" 
const root = ReactDOM.createRoot(document.getElementById('root'));
const socket = io("http:loc")

root.render(
  <React.StrictMode>
    <h1>Hiiiiii</h1>
  </React.StrictMode>
);

reportWebVitals();
