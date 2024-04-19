import React from 'react';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
import state from './components/redux/state';

const root = createRoot(document.getElementById('root'))
root.render(
  <App
    state={state}
  />
)
