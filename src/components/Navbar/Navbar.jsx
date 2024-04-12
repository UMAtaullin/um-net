import React from 'react'
import cls from'./Navbar.module.css'

const Navbar = () => {
  return (
		<nav className={cls.nav}>
			<div className={cls.item}>
				<a href='#'>Profile</a>
			</div>
			<div className={cls.item}>
				<a href='#'>Message</a>
			</div>
			<div className={cls.item}>
				<a href='#'>News</a>
			</div>
			<div className={cls.item}>
				<a href='#'>Music</a>
			</div>
			<div className='settings'>
				<a>Settings</a>
			</div>
		</nav>
	)
}

export default Navbar
