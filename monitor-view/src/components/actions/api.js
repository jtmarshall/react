import axios from "axios";  // request library

// url for monitor status info endpoint
let statusURL = "http://monitoring-env.qj3cticwqw.us-east-1.elasticbeanstalk.com/api/monitorstatus";
// let statusURL = "http://localhost:5555/api/monitorstatus";
let monthlyStatusURL = "http://monitoring-env.qj3cticwqw.us-east-1.elasticbeanstalk.com/api/monthlymonitorstatus";
let fofURL = "http://monitoring-env.qj3cticwqw.us-east-1.elasticbeanstalk.com/api/404list";
let facilityListURL = "http://monitoring-env.qj3cticwqw.us-east-1.elasticbeanstalk.com/api/getFacilities";
let crawlURL = "http://monitoring-env.qj3cticwqw.us-east-1.elasticbeanstalk.com/api/runCrawl";
// let crawlURL = "http://localhost:5555/api/runCrawl";

// Check if we need to convert to relative url because basic auth
if (document.location.host === "monitor.acadiadevelopment.com") {
    statusURL = "http://" + document.location.host + "/api/monitorstatus";
    monthlyStatusURL = "http://" + document.location.host + "/api/monthlymonitorstatus";
    fofURL = "http://" + document.location.host + "/api/404list";
    crawlURL = "http://" + document.location.host + "/api/runCrawl";
}


export default {
    crawl: {
        startCrawl: (domainToCrawl, userEmail, crawlType, searchTerm='') => {
            // Set form data variable
            let formData = new FormData();
            formData.set('domain', domainToCrawl);
            formData.set('email', userEmail);
            formData.set('crawlType', crawlType);
            formData.set('searchTerm', searchTerm);

            return axios.post(crawlURL, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            })
                .then((resp) => {
                    return resp.data;
                })
                .catch((resp) => {
                    //handle error
                    console.log(resp);
                });
        }
    },
    facility: {
        getFacilityList: () => {
            return axios.get(facilityListURL).then((resp) => {
                return resp.data;
            })
                .catch(function (err) {
                    console.log("GET Facility List ERR: ", err);
                })
        }
    },
    fof: {
        get404List: () => {
            return axios.get(fofURL).then((resp) => {
                return resp.data;
            })
                .catch(function (err) {
                    console.log("GET 404 ERR: ", err);
                })
        }
    },
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
        }
    },
}
