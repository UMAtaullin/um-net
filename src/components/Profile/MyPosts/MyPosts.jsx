import React from 'react'
import './MyPosts.module.css'
import cls from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let postElements = props.postsData.map(el => (<Post message={el.message} likes={el.likes} />))

  let newPostElement = React.createRef()

  let addPosts = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={cls.header}>
      <div>
        My posts
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={addPosts}>
          Add
        </button>
        <button>
          Delete
        </button>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts
