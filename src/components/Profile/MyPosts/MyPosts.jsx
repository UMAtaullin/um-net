import React from 'react'
import './MyPosts.module.css'
import cls from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
debugger
  let postElements = props.postsData.map(el => (<Post message={el.message} likes={el.likes} />))

  let newPostElement = React.createRef()

  let addPosts = (props) => {
    let text = newPostElement.current.value
    props.addPost(text)
    newPostElement.current.value = ''
  }

  return (
    <div className={cls.header}>
      <div>
        My posts
        <textarea ref={newPostElement}>
        </textarea>
        <button onClick={addPosts}>
          Add
        </button>
        <button>Delete</button>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts
