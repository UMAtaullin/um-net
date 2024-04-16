import React from 'react'
import cls from './Messenger.module.css'
import { NavLink } from 'react-router-dom'

const Dialogs = props => {
  return (
    <dev className={cls.dialogs_item}>
      <NavLink to={props.name.toLowerCase()}>
        {props.name}
      </NavLink>
    </dev>
  )
}

const Messages = props => {
  return (
    <dev className={cls.messages_item}>
      {props.message}
    </dev>
  )
}

// ------- Start DataBase ------- //
const DialogsData = [
  { name: 'Farit' },
  { name: 'Zemfira' },
  { name: 'Ilnur' },
  { name: 'Mansur' },
  { name: 'Raushania' },
]

const MessagesData = [
  { message: 'Let us go' },
  { message: 'Cross th bridge.' },
  { message: 'This is an affirmative sentence.' },
  { message: 'Cross th bridge.' },
  { message: 'You can also take the bus.' },
]
// ------- End DataBase ------- //

let dialogsElements = DialogsData.map(el => <Dialogs name={el.name} />)
let massagesElements = MessagesData.map(el => <Messages message={el.message} />)

const Messenger = () => {
  return (
    <div className={cls.messenger_page}>
      <dev className={cls.dialogs}>
        {dialogsElements}
      </dev>
      <dev className={cls.messages}>
        {massagesElements}
      </dev>
    </div>
  )
}

export default Messenger
