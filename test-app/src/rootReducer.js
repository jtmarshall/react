import { combineReducers } from "redux";
// import user from "./reducers/user";
import { USER_LOGGED_IN } from "./components/actions/types";

function user(state = {}, action = {}) {
    switch(action.type) {
        case USER_LOGGED_IN:
           return action.user;
        default:
           return state;
    }
}

// Reducer is func that takes state and returns new state
export default combineReducers({
    user
});
