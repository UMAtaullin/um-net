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

// ------- Start DataBase ------- //
const DialogsData = [
  { name: 'Farit' },
  { name: 'Zemfira' },
  { name: 'Ilnur' },
  { name: 'Mansur' },
  { name: 'Raushania' },
]
// ------- End DataBase ------- //

let dialogsElements = DialogsData.map(el => <Dialogs name={el.name} />)

export default dialogsElements
