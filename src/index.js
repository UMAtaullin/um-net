import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import store from './components/redux/state'

let rerenderEntireTree = (state) => {
  const root = createRoot(document.getElementById('root'))
  root.render(
    <BrowserRouter>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store = {store}
      />
    </BrowserRouter>
  )
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
