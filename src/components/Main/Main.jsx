import React from "react"
import Profile from "../Profile/Profile"
import cls from './Main.module.css'
import MyPosts from "../MyPosts/MyPosts"

const Main = () => {
  return (
    <main className={cls.content}>
      <div className={cls.picture}>
        <a href='#'>
          <img
            src='https://www.bkacontent.com/wp-content/uploads/2015/12/PhotoDescriptionSplash.jpg'
            alt='Background'
          />
        </a>
      </div>
        <Profile/>
      <MyPosts/>
    </main>
  )
}

export default Main
