import axios from "axios";  // request library

// url for GOAuth
var oauthURL = "http://localhost:5050/oauth";

// Init form data
var fData = new FormData();

export default {
    user: {
        login: credentials => {
            // set form data
            fData.set('user', credentials.user);
            fData.set('pass', credentials.pass);
            // axios post request with credentials, send with form-data
            return axios({
                method: 'post',
                url: oauthURL,
                data: fData,
                config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
            })
            .then((response) => {
                // on success: return response data from server (email, token)
                return response.data;
            })
            // .catch(function (error) {
            //     console.log(error);
            // })
        }
    }
}