import {
  ADD_POST,
  FETCH_POSTS,
  LOGIN,
  LOGOUT,
  REGISTER_USER
} from "./actionTypes";

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const fetchPost = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );

    if (response.status === 401) {
      dispatch({ type: LOGOUT });
      return;
    }
    const json = await response.json();
    dispatch({ type: FETCH_POSTS, payload: json });
  };
};

export const registerUser = (user) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });
    const json = await response.json();
    dispatch({ type: LOGIN });
    console.log(json);
  };
};

export const loginUser = (user) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3001/sessions/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });
    const json = await response.json();
    localStorage.setItem("token", json.access_token);
    dispatch({ type: REGISTER_USER, payload: json });
    dispatch({ type: LOGIN });
    console.log(json);
  };
};

export const getProfileFetch = () => {
  return async (dispatch) => {
    const token = await localStorage.token;
    if (!token) {
      return;
    }
    const response = await fetch(
      "http://localhost:3001/api/protected/random-quote",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const json = await response.json();
    dispatch({ type: REGISTER_USER, payload: json });
    console.log(json);
  };
};
