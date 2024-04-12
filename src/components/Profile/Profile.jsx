import React from "react";
import cls from './Profile.module.css'

const Profile = () => {
  return (
    <div className={cls.profile}>
      <div className={cls.ava}>
        <a href='#'>
          <img
            src='https://masterpiecer-images.s3.yandex.net/bc1294fc916311eeb689d659965eed18:upscaled'
            alt='ava'
          />
        </a>
      </div>
      <div className={cls.description}>
        <p className={cls.name}>Name: Ural Ataullin</p>
        <p className={cls.name}>Date: 24.01.1988</p>
        <p className={cls.name}>Telegram: @UMAtaullin</p>
        <p className={cls.name}>Interests: programming</p>
      </div>
    </div>
  )
}

export default Profile
