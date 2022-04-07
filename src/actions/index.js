import jsonPlaceholder from "../apis/jsonPlaceholder"
import _ from "lodash";


export const fetchPostsAndUsers = () => async(dispatch, getState) => {
    console.log("About to fetch posts")
    // calling an action creator inside an action creator.
    // we need to make sure we dispatch the result of calling an action creator as well
    await dispatch(fetchPosts()); 
    console.log("Fetched posts")  
    
    // get unique user ids
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    console.log("User ids: ", userIds)

    // call fetchUser for each unique user id
    userIds.forEach(id => dispatch(fetchUser(id)));

}

export const fetchPosts = () =>  async (dispatch) => {
    const response =  await jsonPlaceholder.get('/posts');

    dispatch({
        type: "FETCH_POSTS",
        payload: response.data
    })
}

export const fetchUser = (id) => async dispatch => {
    const res = await jsonPlaceholder.get("/users/"+id);
    dispatch({type: "FETCH_USER", payload: res.data}) 
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



// ---- MEMOIZED VERSION -----
// export const fetchUser = (id) => dispatch => {
//     _memoizedFetchUser(id, dispatch);
// }

// // memoizing to avoid multiple network requests for the same User ID.
// const _memoizedFetchUser = _.memoize(async(id, dispatch) => {
//     const res = await jsonPlaceholder.get("/users/"+id);
//     dispatch({type: "FETCH_USER", payload: res.data})  
// })