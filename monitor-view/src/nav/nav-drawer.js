import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Link } from 'react-router-dom';


class NavDrawer extends React.Component {
    state = {
        open: false,
        anchor: 'left',
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { anchor, open } = this.state;

        const drawer = (
            <Drawer
                onClick={this.handleDrawerClose}
                anchor={anchor}
                open={open}
                className='nav-drawer'
            >
                <div className="drawerHeader">
                    <IconButton onClick={this.handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <Link to="/">
                    <List style={{textAlign: 'center', color: '#222'}}>Status</List>
                </Link>
                <Divider />
                <Link to="/404">
                    <List style={{textAlign: 'center', color: '#222'}}>404</List>
                </Link>
            </Drawer>
        );

        return (
            <div style={{marginBottom: '4em'}}>
                <div>
                    <AppBar
                        style={{backgroundColor: '#222'}}
                        className='appBar appBarShift'
                    >
                        <Toolbar disableGutters={!open}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerOpen}

                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" noWrap>
                                Acadia Monitoring
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    {drawer}
                </div>
            </div>
        );
    }
}

export default NavDrawer;