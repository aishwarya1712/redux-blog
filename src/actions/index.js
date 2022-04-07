import jsonPlaceholder from "../apis/jsonPlaceholder"
import _ from "lodash";

export const fetchPosts = () =>  async (dispatch) => {
    const response =  await jsonPlaceholder.get('/posts');

    dispatch({
        type: "FETCH_POSTS",
        payload: response.data
    })
}

// export const fetchUser = (id) => async (dispatch) => {
//     const response = await jsonPlaceholder.get('/users/'+id);
//     dispatch({
//         type: "FETCH_USER",
//         payload: response.data
//     })
// }
// -------------------- both these are same. the first one is shortened syntax -----------------
// export const fetchPosts = () => {

//     return async (dispatch) => {
//     const response =  await jsonPlaceholder.get('/posts');

//     dispatch({
//         type: "FETCH_POSTS",
//         payload: response
//     })
// }
// }   

//-------will not work
// export const fetchUser = _.memoize(function(id) {
//     return async function (dispatch){
//         const res = await jsonPlaceholder.get("/users/"+id);
//         dispatch({type: "FETCH_USER", payload: res.data})
//     }
// })



export const fetchUser = (id) => dispatch => {
    _memoizedFetchUser(id, dispatch);
}

// memoizing to avoid multiple network requests for the same User ID.
const _memoizedFetchUser = _.memoize(async(id, dispatch) => {
    const res = await jsonPlaceholder.get("/users/"+id);
    dispatch({type: "FETCH_USER", payload: res.data})  
})