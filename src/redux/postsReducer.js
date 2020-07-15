import { ADD_POST, FETCH_POSTS } from './actionTypes';

const initialState = {
    posts: [],
    fetchedPost: []
}

export const postsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      return {...state, posts: [...state.posts, action.payload]}
    case FETCH_POSTS:
      return {...state, fetchedPost: action.payload}
    default: return state
  }
  
}