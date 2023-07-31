import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {io} from "socket.io-client" 
import { useState } from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
const socket = io("http://localhost:3000")

const [id,setId] = useState("...")
socket.on("connect",()=>setId(socket.id))
root.render(
  <React.StrictMode>
    <h1>{id</h1>
  </React.StrictMode>
);

reportWebVitals();
