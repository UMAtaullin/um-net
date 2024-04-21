import { rerenderEntireTree } from "../../render"

let state = {
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
}

window.state = state;

export let addPost = () => {
  let newPost = {
    message: state.profilePage.newPostText,
    likes: 0
  };
  state.profilePage.postsData.push(newPost);
  state.messengerPage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state)
}

export default state;
