import React from 'react'
import App from './App'
import { addPost, updateNewPostText } from './components/redux/state'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'


export let rerenderEntireTree = (state) => {
  const root = createRoot(document.getElementById('root'))
  root.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>
  )
}
