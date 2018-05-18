import axios from "axios";  // request library

// url for monitor status info endpoint
let statusURL = "http://go-monitor.us-east-1.elasticbeanstalk.com/monitorstatus";
let monthlyStatusURL = "http://go-monitor.us-east-1.elasticbeanstalk.com/monthlymonitorstatus";
let fofURL = "http://go-monitor.us-east-1.elasticbeanstalk.com/404list";

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
                    console.log("GET Status ERR: ", err);
                })
        },
        getMonthlyStatusInfo: () => {
            return axios.get(monthlyStatusURL).then((resp) => {
                return resp.data;
            })
                .catch(function (err) {
                    console.log("GET MonthlyStatus ERR: ", err);
                })
        },
        get404List: () => {
            return axios.get(fofURL).then((resp) => {
                return resp.data;
            })
                .catch(function (err) {
                    console.log("GET 404 ERR: ", err);
                })
        }
    }
}
