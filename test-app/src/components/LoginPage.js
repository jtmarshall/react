import React from "react";
import LoginForm from "./LoginForm";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "./actions/auth";

class LoginPage extends React.Component {
    // called when form submitted: dispatch login action with passed in data
    submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));
    
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm submit={this.submit} />
            </div>
        )
    }
}

LoginPage.propTypes = {
    history: propTypes.shape({
        push: propTypes.func.isRequired
    }).isRequired,
    login: propTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);