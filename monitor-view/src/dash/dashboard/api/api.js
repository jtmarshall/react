import axios from "axios";  // request library

// url for monitor status info endpoint
let statusURL = "http://monitoring-env.qj3cticwqw.us-east-1.elasticbeanstalk.com/api/monitorstatus";
let monthlyStatusURL = "http://monitoring-env.qj3cticwqw.us-east-1.elasticbeanstalk.com/api/monthlymonitorstatus";
let fofURL = "http://monitoring-env.qj3cticwqw.us-east-1.elasticbeanstalk.com/api/404list";
let facilityListURL = "http://monitoring-env.qj3cticwqw.us-east-1.elasticbeanstalk.com/api/getFacilities";
let authURL = "";
let updateURL = "/updatePak";
let csvEndpoint = document.location.origin + "/api/csv";

// Check if we need to convert to relative url because basic auth
if (document.location.host === "monitor.acadiadevelopment.com") {
    statusURL = "http://" + document.location.host + "/api/monitorstatus";
    monthlyStatusURL = "http://" + document.location.host + "/api/monthlymonitorstatus";
    fofURL = "http://" + document.location.host + "/api/404list";
}


export default {
    downloadFile: {
        uploadRequest: (data) => {
            console.log("API Request to: ", csvEndpoint);
            return axios.post(csvEndpoint, data, {headers: {'Content-Type': 'multipart/form-data'}})
                .then((response) => {
                    console.log("Headers: ", response.headers);
                    // get filename from resp
                    const filename = response.headers['content-disposition'].split('filename=')[1];

                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', filename);
                    document.body.appendChild(link);
                    link.click();
                    return response.data;
                })
                .catch((err) => {
                    console.log("Upload ERR: ", err);
                })
        }
    },
    facility: {
        getFacilityList: () => {
            return axios.get(facilityListURL).then((resp) => {
                // console.log(resp.data);
                return resp.data;
            })
                .catch((err) => {
                    console.log("GET Facility List ERR: ", err);
                })
        }
    },
    fof: {
        get404List: () => {
            return axios.get(fofURL).then((resp) => {
                return resp.data;
            })
                .catch((err) => {
                    console.log("GET 404 ERR: ", err);
                })
        }
    },
    security: {
        authenticateLogin: (user, pass) => {
            // Set user creds in form data
            let formData = new FormData();
            formData.set('user', user);
            formData.set('pass', pass);

            return axios.post(authURL, formData, {headers: {'Content-Type': 'multipart/form-data'}})
                .then((resp) => {
                    return resp.data
                })
                .catch((err) => {
                    console.log("Authentication ERR: ", err)
                })
        },
        pushYakPak: (yakPak) => {
            // Access the user's pak and push to goauth server to save
            let formData = new FormData();
            formData.set('yakpak', yakPak.toString());

            axios.post(updateURL, formData, {headers: {'Content-Type': 'multipart/form-data'}})
                .then((resp) => {
                    console.log("pak stored.")
                })
                .catch((err) => {
                    console.log("Pak store ERR: ", err)
                })
        }
    },
    status: {
        getStatusInfo: () => {
            return axios.get(statusURL).then((resp) => {
                return resp.data;
            })
                .catch((err) => {
                    console.log("GET Status ERR: ", err);
                })
        },
        getMonthlyStatusInfo: () => {
            return axios.get(monthlyStatusURL).then((resp) => {
                return resp.data;
            })
                .catch((err) => {
                    console.log("GET MonthlyStatus ERR: ", err);
                })
        }
    },
}
