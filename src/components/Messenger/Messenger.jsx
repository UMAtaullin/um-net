import React from 'react'
import cls from './Messenger.module.css'
import { NavLink } from 'react-router-dom'

const Dialogs = (props) => {
  return (
    <dev className={cls.dialogs_item}>
      <NavLink to={props.name.toLowerCase()}>
        {props.name}
      </NavLink>
    </dev>
  )
}

const Messages = (props) => {
  return (
    <dev className={cls.messages_item}>
      {props.message}
    </dev>
  )
}


const Messenger = () => {
  return (
    <div className={cls.messenger_page}>
      <dev className={cls.dialogs}>
        <Dialogs name='Farit' />
        <Dialogs name='Zemfira' />
        <Dialogs name='Ilnur' />
        <Dialogs name='Mansur' />
        <Dialogs name='Raushania' />
      </dev>
      <dev className={cls.messages}>
        <Messages message="Let's go" />
        <Messages message='Cross th bridge.' />
        <Messages message='This is an affirmative sentence.' />
        <Messages message='Cross th bridge.' />
        <Messages message='You can also take the bus.' />
      </dev>
    </div>
  )
}

export default Messenger
