import React from 'react'
import cls from './Messenger.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from './Messages/Messages'


const Messenger = () => {

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

  let dialogsElements = DialogsData.map(el => <Dialogs name={el.name} />)
  let massagesElements = MessagesData.map(el => <Messages message={el.message} />)


  return (
    <div className={cls.messenger_page}>
      <dev className={cls.dialogs}>{dialogsElements}</dev>
      <dev className={cls.messages}>{massagesElements}</dev>
    </div>
  )
}

export default Messenger
