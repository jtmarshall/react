import axios from "axios";  // request library

// url for monitor status info endpoint
//const statusURL = "http://go-monitor.us-east-1.elasticbeanstalk.com/getDomainInfo";
const statusURL = "http://go-monitor.us-east-1.elasticbeanstalk.com/monitorstatus";
const monthlyStatusURL = "http://go-monitor.us-east-1.elasticbeanstalk.com/monthlymonitorstatus";

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