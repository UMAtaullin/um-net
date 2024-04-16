import React from 'react'
import './MyPosts.module.css'
import cls from './MyPosts.module.css'
import Post from './Post/Post'

const PostsData = [
  { message: 'Hi, it is me', like: 5 },
  { message: 'Where have you been', like: 14 },
]

let postMessage = PostsData.map(el => <Post message={el.message} like={el.like} />)

const Messages = (props) => {
  return <div className={cls.posts}>{postMessage}</div>
}

const MyPosts = () => {
  return (
    <div className={cls.header}>
      <div className='inf'>
        My posts
        <textarea name='' id='' cols='30' rows='1'>
          Написать пост
        </textarea>
        <button>Add</button>
        <button>Delete</button>

        <Messages />
      </div>
    </div>
  )
}

export default MyPosts
