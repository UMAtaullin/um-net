import React from "react"
import './MyPosts.module.css'
import cls from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div className='posts'>
      My posts
      <div className={cls.item}>Post-1</div>
      <div className={cls.item}>Post-2</div>
      <div className={cls.item}>Post-3</div>
    </div>
  )
}

export default MyPosts
