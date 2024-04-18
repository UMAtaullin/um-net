import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';

let postsData = [
  { message: 'Hi, it is me', like: 5 },
  { message: 'Where have you been', like: 14 },
]

const dialogsData = [
  { name: 'Farit' },
  { name: 'Zemfira' },
  { name: 'Ilnur' },
  { name: 'Mansur' },
  { name: 'Raushania' },
]

const messagesData = [
  { message: 'Let us go' },
  { message: 'Cross th bridge.' },
  { message: 'This is an affirmative sentence.' },
  { message: 'Cross th bridge.' },
  { message: 'You can also take the bus.' },
]

const root = createRoot(document.getElementById('root'))
root.render(
  <App
    postsData={postsData}
    dialogsData={dialogsData}
    messagesData={messagesData}
  />
)
