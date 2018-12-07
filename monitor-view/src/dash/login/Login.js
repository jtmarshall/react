import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import AuthService from './AuthService';
import FormControl from "@material-ui/core/FormControl/FormControl";
import Button from "@material-ui/core/Button/Button";
import CardHeader from "../dashboard/tools/Card/CardHeader";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Card from "../dashboard/tools/Card/Card";
import CardActions from "@material-ui/core/CardActions/CardActions";
import './Login.css';
import logo from "../assets/logo/yak-logo-fullbody.svg";


class Login extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }

    // Redirect login page if
    componentWillMount() {
        if (this.Auth.loggedIn())
            this.props.history.replace('/');
    }

    render() {
        return (
            <div className="loginBlock">
                <img src={logo} style={{height: "280px"}} alt="logo"/>
                <br/>
                <Card style={{width: '50%', minWidth: '400px'}}>
                    <CardHeader color="prime">
                        <h4 className={'cardTitleWhite'}>YAK</h4>
                    </CardHeader>
                    <CardContent>
                        <FormControl className="">
                            <form>
                                <TextField
                                    required
                                    id="username-input"
                                    label="Username"
                                    className={'textField'}
                                    margin="normal"
                                    onChange={this.handleChange}
                                />
                                <br/>
                                <TextField
                                    required
                                    id="password-input"
                                    label="Password"
                                    className={'textField'}
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    onChange={this.handleChange}
                                />
                                <CardActions style={{display: 'block'}}>
                                    <Button variant="contained" size="large"
                                            onClick={this.props.onSubmit}
                                            >
                                        Login
                                    </Button>
                                </CardActions>
                            </form>
                        </FormControl>
                    </CardContent>
                </Card>
            </div>
        );
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit(e) {
        e.preventDefault();

        this.Auth.login(this.state.username, this.state.password)
            .then(res => {
                this.props.history.replace('/story');
            })
            .catch(err => {
                alert(err);
            })
    }
}

export default Login;