import axios from "axios";  // request library

// url for monitor status info endpoint
let statusURL = "http://go-monitor.us-east-1.elasticbeanstalk.com/monitorstatus";
let monthlyStatusURL = "http://go-monitor.us-east-1.elasticbeanstalk.com/monthlymonitorstatus";

// Check if we need to convert to relative url because basic auth
if (document.location.host === "monitor.acadiadevelopment.com") {
    statusURL = "http://" + document.location.host + "/monitorstatus";
    monthlyStatusURL = "http://" + document.location.host + "/monthlymonitorstatus";
}


export default {
    status: {
        getStatusInfo: () => {
            return axios.get(statusURL).then((resp) => {
                return resp.data;
            })
                .catch(function (err) {
                    console.log(err);
                })
        },
        getMonthlyStatusInfo: () => {
            return axios.get(monthlyStatusURL).then((resp) => {
                return resp.data;
            })
                .catch(function (err) {
                    console.log(err);
                })
        }
    }
}
