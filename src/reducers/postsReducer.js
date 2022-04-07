
export default (state = [], action) => {
   switch(action.type) {
        case "FETCH_POSTS": 
            return action.payload;
        default:
            return state;
   }
}

// ---- cant have reducer that doesn't have a return statement or a reducer that returns undefined
// export default () => {
//     
// }

// ---- cant have reducer that calls API or reaches out to DOM or reads from a file.
// reducers have to compute new state by only using old state and action.
// export default (state, action) => {
//      BAD!
//      return document.getElementById("#root");

//      BAD!
//      return axios.get("/posts")

//      GOOD!
//      return state + action;
// }