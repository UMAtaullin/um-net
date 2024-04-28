import React from 'react'
import cls from './Messenger.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from './Messages/Messages'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/state'


const Messenger = (props) => {

  let state = props.store.getState().messengerPage;

  let dialogsElements = state.dialogsData.map(
    el => <Dialogs name={el.name} />);
  let messagesElements = state.messagesData.map(
    el => <Messages message={el.message} />);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))
  };


  return (
    <div className={cls.messenger_page}>
      <dev className={cls.dialogs}>{dialogsElements}</dev>
      <dev className={cls.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            >
            </textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>
              Send
            </button>
          </div>
        </div>
      </dev>
    </div>
  )
}

export default Messenger
