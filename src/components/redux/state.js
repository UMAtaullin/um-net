import messengerReducer from "./messengerReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

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

    this._state.profilePage = profileReducer(this._state.profilePage,
      action)
    this._state.messengerPage = messengerReducer(this._state.messengerPage,
      action)
    this._state.sidebar = sidebarReducer(this._state.sidebar,
      action)

    this._callSubscriber(this._state);
  }
}

export default store;

window.store = store;
