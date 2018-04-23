import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./types";
import api from "./api";
import axios from "axios";

// takes in a user and returns type logged in
export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

// func takes credentials, returns another func, that will make the api request with credentials
export const login = credentials => dispatch => {
    return api.user.login(credentials).then(user => {
        console.log(user);
        // save token to session
        sessionStorage.acadiaToken = user.Token;
        // then set header
        setAuthHeader(user.Token);
        dispatch(userLoggedIn(user.User));
    });
}

export const logout = () => dispatch => {
    sessionStorage.removeItem("acadiaToken");
    setAuthHeader();
    dispatch(userLoggedOut());
};

var setAuthHeader = (token = null) => {
    if (token) {
        axios.defaults.headers.common.authorization = `Bearer ${token}`;
      } else {
        delete axios.defaults.headers.common.authorization;
      }
};