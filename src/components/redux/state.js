let store = {
  _state: {
    profilePage: {
      postsData: [
        { message: 'Hi, it is me', likes: 5 },
        { message: 'Where have you been', likes: 14 },
      ],
      newPostText: 'new text'
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
    sidebar: {}
  },
  getState() {
    debugger;
    return this._state
  },
  _callSubscriber() {
    console.log('State changed')
  },
  addPost() {
    debugger;
    let newPost = {
      message: this._state.profilePage.newPostText,
      likes: 0
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
}

export default store;

window.store = store;
