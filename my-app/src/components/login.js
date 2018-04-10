import React from 'react';

export default class Login extends React.Component {
    state = {};
    constructor() {
        super();

        this.state = {
            user: [
                {
                    username: 'testy',
                    token: '',
                    email: 'testy.testerson@test.com',
                    role: 2,
                    expires: ''
                }
            ]
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.requestLogin();
      }

    requestLogin() {
        var fd = 'user='+ this.user.value +'&pass=' + this.pass.value;

        var req = new XMLHttpRequest();
        req.open('POST', 'http://localhost:5050/oauth');
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        req.send(fd);

        // Handle response
        req.onreadystatechange = function () {
            try {
                // If request is finished
                if (req.readyState === XMLHttpRequest.DONE) {
                    // Response recieved, all good
                    if (req.status === 200) {
                        document.cookie = "beacon" + "=" + req.responseText;
                        
                        var bc = JSON.parse(req.responseText);
                        console.log(bc);
                        this.setState({
                            user: [
                              {
                                  username: bc.User,
                                  token: bc.Token,
                                  email: 'testy.testerson@acadiahealthcare.com',
                                  role: bc.Role,
                                  expires: bc.Expires
                              }
                            ]
                          });
                    } else {
                        // Problem with request 404/500 etc...
                        console.log("pvGET Request Error: " + req.status);
                    }
                }
            } catch (e) {
                // make sure cookie is deleted on fail
                document.cookie = 'beacon' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                console.log(e);
            }
        };
    }

    render(){ 
        let userItems
        userItems = this.state.user.map(item => {
            return (
                <p key={item.username} className="Login">
                    User: {item.username} <br />
                    Token: {item.token}
                </p>
            );
        });
        return (
            <div className="Login">
                <p>
                    <input type="text" ref={(user) => this.user = user} />
                    <input type="text" ref={(pass) => this.pass = pass} />
                    <button onClick={this.handleChange}>Test Login</button>
                </p>
                {userItems}
            </div>
       );
     }
}