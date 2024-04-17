import React from 'react'
import cls from './Messenger.module.css'
import Dialogs from './Dialogs/Dialogs'
import massagesElements from './Messages/Messages'


const Messenger = () => {
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

  return (
    <div className={cls.messenger_page}>
      <dev className={cls.dialogs}>{dialogsElements}</dev>
      <dev className={cls.messages}>{massagesElements}</dev>
    </div>
  )
}

export default Messenger
