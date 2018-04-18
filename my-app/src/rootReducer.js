import { combineReducers } from "redux";
import user from "./reducers/user";

// Reducer is func that takes state and returns new state
export default combineReducers({
    user
});
