import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';

let postsData = [
  { message: 'Hi, it is me', like: 5 },
  { message: 'Where have you been', like: 14 },
]

const root = createRoot(document.getElementById('root'))
root.render(<App postsData={postsData}/>)
