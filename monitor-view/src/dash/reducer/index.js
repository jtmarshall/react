import { combineReducers } from 'redux';


export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";

function user(state = {}, action = {}) {
    switch(action.type) {
        case USER_LOGGED_IN:
            return action.user;
        default:
            return state;
    }
}

export default combineReducers({
    user
});