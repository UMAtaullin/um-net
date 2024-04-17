import React from 'react';
import cls from './../Messenger.module.css'


const Messages = (props) => {
  return (
    <dev className={cls.messages_item}>
      {props.message}
    </dev>
    )
}

export default Messages
