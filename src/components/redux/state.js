import { rerenderEntireTree } from "../../render"


let state = {
  profilePage: {
    postsData: [
      { message: 'Hi, it is me', likes: 5 },
      { message: 'Where have you been', likes: 14 },
    ],
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

export let addPost = (postMessage) => {
  let newPost = {
    message: postMessage,
    likes: 0
  };
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
}

export default state;
