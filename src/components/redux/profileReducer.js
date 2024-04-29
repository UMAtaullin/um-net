const profileReducer = (state, action) => {

  switch(action.type) {
    case 'ADD-POST':
      let newPost = {
      message: state.newPostText,
      likes: 0,
    }
      state.postsData.push(newPost)
      state.newPostText = ''
      return state
    case 'UPDATE-NEW-POST-TEXT':
      state.newPostText = action.newText
      return state
    default:
      return state
  }
}

export const addPostsAction = () => ({ type: 'ADD-POST' })
export const onPostChangeAction = text => ({
  type: 'UPDATE-NEW-POST-TEXT',
  newText: text,
})

export default profileReducer
