import { USER_LOGGED_IN } from "./types";
import api from "./api";

// takes in a user and returns type logged in
export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

// func takes credentials, returns another func, that will make the api request with credentials
export const login = (credentials) => {
    api.user.login(credentials).then(res => {
        console.log(res);
        // save token to session
        sessionStorage.acadiaToken = res.Token;
        userLoggedIn(res.User);
    });
}