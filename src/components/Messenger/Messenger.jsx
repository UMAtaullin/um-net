import React from 'react'
import cls from './Messenger.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from './Messages/Messages'


const Messenger = (props) => {

  let dialogsElements = props.state.dialogsData.map(el => <Dialogs name={el.name} />)
  let messagesElements = props.state.messagesData.map(el => <Messages message={el.message} />)


  return (
    <div className={cls.messenger_page}>
      <dev className={cls.dialogs}>{dialogsElements}</dev>
      <dev className={cls.messages}>{messagesElements}</dev>
    </div>
  )
}

export default Messenger
