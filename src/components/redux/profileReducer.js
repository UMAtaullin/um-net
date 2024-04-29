const profileReducer = (state, action) => {

  if (action.type === 'ADD-POST') {
    let newPost = {
      message: state.newPostText,
      likes: 0,
    }
    state.postsData.push(newPost)
    state.newPostText = ''
  } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
    state.newPostText = action.newText
  }

  return state;
}

export default profileReducer
