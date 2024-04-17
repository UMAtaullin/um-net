import React from 'react';
import cls from './../Messenger.module.css'


const Messages = props => {
  return (
    <dev className={cls.messages_item}>
      {props.message}
    </dev>
    )
}

// ------- Start DataBase ------- //
const MessagesData = [
  { message: 'Let us go' },
  { message: 'Cross th bridge.' },
  { message: 'This is an affirmative sentence.' },
  { message: 'Cross th bridge.' },
  { message: 'You can also take the bus.' },
]
// ------- End DataBase ------- //

let massagesElements = MessagesData.map(el => <Messages message={el.message} />)

export default massagesElements
