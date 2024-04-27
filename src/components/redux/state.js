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
  dispatch(action) { // {type: 'ADD-POST}
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
    }
  }
}

export const addPostsAction = () => ({ type: 'ADD-POST' })
export const onPostChangeAction = (text) =>
({ type: 'UPDATE-NEW-POST-TEXT', newText: text })

export default store;

window.store = store;
