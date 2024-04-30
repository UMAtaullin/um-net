let initialState = {
  dialogsData: [
    { name: 'Farit' },
    { name: 'Zemfira' },
    { name: 'Ilnur' },
    { name: 'Mansur' },
    { name: 'Raushania' },
  ],
  messagesData: [
    { message: 'Let us go' },
    { message: 'Cross th bridge.' },
    { message: 'This is an affirmative sentence.' },
    { message: 'Cross th bridge.' },
    { message: 'You can also take the bus.' },
  ],
  newMessageBody: ''
}

const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NEW_MESSAGE_BODY':
      state.newMessageBody = action.body
      return state
    case 'SEND_MESSAGE':
      let body = state.newMessageBody
      state.newMessageBody = ''
      state.messagesData.push({ message: body })
      return state
    default:
      return state
  }
}

export const sendMessageCreator = () => ({ type: 'SEND_MESSAGE' })
export const updateNewMessageBodyCreator = body => ({
  type: 'UPDATE_NEW_MESSAGE_BODY',
  body: body,
})

export default messengerReducer
