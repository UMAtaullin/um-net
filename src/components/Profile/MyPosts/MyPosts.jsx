import React from 'react'
import './MyPosts.module.css'
import cls from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {

  let postElements = props.postsData.map(el => (
    <Post message={el.message} like={el.like} />
  ))

  return (
    <div className={cls.header}>
      <div className='inf'>
        My posts
        <textarea name='' id='' cols='30' rows='1'>
          Написать пост
        </textarea>
        <button>Add</button>
        <button>Delete</button>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts
