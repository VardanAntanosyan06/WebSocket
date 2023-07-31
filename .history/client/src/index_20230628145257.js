import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {io} from "socket.io-client" 
import { useState } from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
const socket = io("http://localhost:3000")

const [id,setId]
socket.on("connect",()=>console.log(socket.id))
root.render(
  <React.StrictMode>
    <h1>Hiiiiii</h1>
  </React.StrictMode>
);

reportWebVitals();
