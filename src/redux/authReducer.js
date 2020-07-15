// import {} from "./actionTypes";

import { LOGIN, LOGOUT } from "./actionTypes";

const initialState = {
  isLoggedIn: localStorage.getItem("token"),
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { isLoggedIn: true };
    case LOGOUT:
      return { isLoggedIn: false };
    default:
      return state;
  }
};
