import React from 'react';
import './nav.css';
import logo from '../logo.svg';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


class Nav extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        console.log(event, value);
        this.setState({ value });
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { value } = this.state;
        const sideList = (
            <div className="list">
                <List>item1</List>
                <Divider />
                <List>item2</List>
            </div>
        );

        return (
            <nav>
                <AppBar position="static" style={{backgroundColor: '#222'}}>
                    <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
                    <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer('left', false)}
                            onKeyDown={this.toggleDrawer('left', false)}
                        >
                            {sideList}
                        </div>
                    </Drawer>
                    <Tabs centered>
                        <Link to="/">
                            <Tab label="Home" />
                        </Link>

                        <Link to="/404">
                            <Tab label="404" />
                        </Link>
                    </Tabs>
                </AppBar>
            </nav>
        );
    }
}

export default Nav;
