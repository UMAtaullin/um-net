import React from 'react'
import cls from './../Messenger.module.css'
import { NavLink } from 'react-router-dom'

const Dialogs = (props) => {
  return (
    <dev className={cls.dialogs_item}>
      <NavLink to={props.name.toLowerCase()}>{props.name}</NavLink>
    </dev>
  )
}



export default Dialogs
