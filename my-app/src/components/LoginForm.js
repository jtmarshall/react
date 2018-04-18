import React from "react";
import propTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "./InlineError";

class LoginForm extends React.Component {
    state = {
        data: {
            user: '',
            pass: ''
        },
        loading: false,
        errors: {}
    }

    // Universal event handler for string/text input update
    onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        // Check is errors obj is empty (no errors)
        if (Object.keys(errors).length === 0) {
            // Pass data, catch errors
            this.props.submit(this.state.data);
        }
    };

    // Boilerplate validate code
    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.user)) errors.user = "Invalid email";
        if (!data.pass) errors.pass = "Cannot be blank";
        return errors;
    }

    render() {
        // Deconstruct (this.state.blah.blah.blah)...
        const { data, errors } = this.state;

        return(
            <Form onSubmit={this.onSubmit}>
            { errors.global && (
                <Message negative>
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{errors.global}</p>
                </Message>
            )}
                <Form.Field error={!!errors.user}>
                    <label htmlFor="user">Email</label>
                    <input type="email" id="user" name="user" placeholder="user"
                        value={data.user} onChange={this.onChange}/>
                </Form.Field>
                {errors.user && <InlineError text={errors.user} />}
                <Form.Field error={!!errors.pass}>
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass" name="pass" placeholder="******"
                        value={data.password} onChange={this.onChange}/>
                </Form.Field>
                {errors.pass && <InlineError text={errors.pass} />}
                <Button primary>Login</Button>

            </Form>
        );
    }
}

// Require parent, (LoginPage), to pass submit func
LoginForm.propTypes = {
    submit: propTypes.func.isRequired
};

export default LoginForm;