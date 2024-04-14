import React from "react"
import Profile from "../Profile/Profile"
import cls from './Main.module.css'
import MyPosts from "../MyPosts/MyPosts"
import Message from "../Message/Message"

const Main = () => {
  return (
    <main>
      {/* <div className={cls.picture}>
        <a href='#'>
          <img
            src='https://www.bkacontent.com/wp-content/uploads/2015/12/PhotoDescriptionSplash.jpg'
            alt='Background'
          />
        </a>
      </div> */}

      {/* <Profile/> */}

      {/* <MyPosts/> */}

      <Message/>
    </main>
  )
}

export default Main
