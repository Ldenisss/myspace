import {ADD_POST, FETCH_POSTS} from './actionTypes';

export const addPost = post => ({
    type: ADD_POST,
    payload: post
})

export const fetchPost = () => {
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const json = await response.json()
        dispatch({ type: FETCH_POSTS, payload: json})
    }
}

