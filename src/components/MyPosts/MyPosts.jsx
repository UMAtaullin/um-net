import React from "react"
import './MyPosts.module.css'
import cls from './MyPosts.module.css'
import Post from "./Post/Post"

const MyPosts = () => {
  return (
    <div className={cls.header}>
      <div className="inf">
        My posts
        <textarea name="" id="" cols="30" rows="1">
          Написать пост
        </textarea>
        <button>Add</button>
        <button>Delete</button>
      </div>
      <div className={cls.posts}>
        <Post
        message="Hi, it's me"
        like="5"
        />
        <Post
        message="Where have you been"
        like="15"
        />
      </div>
    </div>
    )
}

export default MyPosts
