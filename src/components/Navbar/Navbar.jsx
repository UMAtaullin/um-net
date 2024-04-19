import React from 'react'
import cls from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={cls.nav}>
      <div className={cls.item}>
        <NavLink to='profile'>Profile</NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to='messages'>Messenger</NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to='news'>News</NavLink>
      </div>
      <div className={cls.item}>
        <NavLink href='music'>Music</NavLink>
      </div>
      <div className={cls.lastItem}>
        <NavLink to='settings'>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
