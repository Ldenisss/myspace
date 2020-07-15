import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { postsReducer } from "./postsReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  auth: authReducer,
});
