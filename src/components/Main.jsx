import React from "react";
import Profile from "./Profile";
import cls from './Main.module.css'

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
      <div className="posts">
        My posts
        <div className={cls.item}>Post-1</div>
        <div className={cls.item}>Post-2</div>
        <div className={cls.item}>Post-3</div>
      </div>
    </main>
  )
}

export default Main
