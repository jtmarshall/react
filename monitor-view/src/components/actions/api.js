import axios from "axios";  // request library

// url for monitor status info endpoint
var statusURL = "http://go-monitor.us-east-1.elasticbeanstalk.com/getDomainInfo";

export default {
    status: {
        getStatusInfo: () => {
            return axios.get(statusURL).then((resp) => {
                return resp.data;
            })
                .catch(function (err) {
                    console.log(err);
                })
        }
    }
}