import { combineReducers } from 'redux'
import { postsReducer } from './postsReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer
})





