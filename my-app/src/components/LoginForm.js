import React from "react";
import propTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "./InlineError";

class LoginForm extends React.Component {
    state = {
        data: {
            email: '',
            password: ''
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
            // Pass data
            this.props.submit(this.state.data);
        }
    };

    // Boilerplate validate code
    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Cannot be blank";
        return errors;
    }

    render() {
        // Deconstruct (this.state.blah.blah.blah)...
        const { data, errors } = this.state;

        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="example@example.com"
                        value={data.email} onChange={this.onChange}/>
                </Form.Field>
                {errors.email && <InlineError text={errors.email} />}
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="******"
                        value={data.password} onChange={this.onChange}/>
                </Form.Field>
                {errors.password && <InlineError text={errors.password} />}
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