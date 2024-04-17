import React from 'react'
import cls from './Messenger.module.css'
import dialogsElements from './Dialogs/Dialogs'
import massagesElements from './Messages/Messages'


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
