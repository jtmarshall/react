import { USER_LOGGED_IN } from "../components/actions/types";

/*
 a reducer is a func that takes state and action then returns new state
 */

 export default function user(state = {}, action = {}) {
     switch(action.type) {
         case USER_LOGGED_IN:
            return action.user;
         default:
            return state;
     }
 }
