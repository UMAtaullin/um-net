import React from "react";
import cls from './Header.module.css'

const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.logo}>
        <a href='#'>
          <img
            src='https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small/abstract-circle-logo-icon-free-png.png'
            alt='Logo'
          />
          <span className={cls.logo_text}>UM-net</span>
        </a>
      </div>
    </header>
  )
}

export default Header
