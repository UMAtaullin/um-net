const messengerReducer = (state, action) => {
    if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
      state.newMessageBody = action.body
    } else if (action.type === 'SEND_MESSAGE') {
      let body = state.newMessageBody
      state.newMessageBody = ''
      state.messagesData.push({ message: body })
    }
  return state;
}

export default messengerReducer
