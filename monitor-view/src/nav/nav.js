import React from 'react';
import './nav.css';
import logo from '../logo.svg';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import { Link } from 'react-router-dom';


class Nav extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
            <nav>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Link to="/">
                            <Tab label="Home" />
                        </Link>
                        <Link to="/dashboard">
                            <Tab label="Dash" />
                        </Link>
                        <Link to="/login">
                            <Tab label="Login" />
                        </Link>
                    </Tabs>
                </AppBar>
            </nav>
        );
    }
}

export default Nav;
