import axios from "axios";  // request library

// url for GOAuth
var oauthURL = "http://localhost:5050/oauth";

// Init form data
var fData = new FormData();

export default {
    user: {
        login: (credentials) => {
            // set form data
            fData.set('user', credentials.user);
            fData.set('pass', credentials.pass);
            // axios post request with credentials, then take response from server get user data: (email, token)
            axios({
                method: 'post',
                url: oauthURL,
                data: fData,
                config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                //handle success
                console.log(response.data);
                res => response.data;
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }
}