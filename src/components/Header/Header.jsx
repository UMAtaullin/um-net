import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className={'header'}>
      <div className='logo'>
        <a href='#'>
          <img
            src='https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small/abstract-circle-logo-icon-free-png.png'
            alt='Logo'
          />
          <span className='logo-text'>UM-net</span>
        </a>
      </div>
    </header>
  )
}

export default Header
