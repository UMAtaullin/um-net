let store = {
  _state: {
    profilePage: {
      postsData: [
        { message: 'Hi, it is me', likes: 5 },
        { message: 'Where have you been', likes: 14 },
      ],
      newPostText: 'new text',
    },
    messengerPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    debugger
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  // Методы которые меняют на state.
  dispatch(action) {
    // {type: 'ADD-POST}
    if (action.type === 'ADD-POST') {
      let newPost = {
        message: this._state.profilePage.newPostText,
        likes: 0,
      }
      this._state.profilePage.postsData.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
      this._state.messengerPage.newMessageBody = action.body
      this._callSubscriber(this._state)
    } else if (action.type === 'SEND_MESSAGE') {
      let body = this._state.messengerPage.newMessageBody
      this._state.messengerPage.newMessageBody = ''
      this._state.messengerPage.messagesData.push({ message: body })
      this._callSubscriber(this._state)
    }
  },
}

export const addPostsAction = () => ({ type: 'ADD-POST' })
export const onPostChangeAction = (text) =>
({ type: 'UPDATE-NEW-POST-TEXT', newText: text })

export const sendMessageCreator = () => ({ type: 'SEND_MESSAGE' })
export const updateNewMessageBodyCreator = body => ({
  type: 'UPDATE_NEW_MESSAGE_BODY',
  body: body,
})

export default store;

window.store = store;
