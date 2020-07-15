import {REGISTER_USER,LOGIN_USER} from "./actionTypes";

const initialState = {
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {...state, user: action.payload}
    case LOGIN_USER:
      return {...state, user: action.payload}
    default:
      return state;
  }
};
