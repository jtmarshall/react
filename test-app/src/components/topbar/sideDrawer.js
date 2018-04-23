import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { Link } from "react-router-dom";

export default class SideDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <IconButton iconStyle={{fill: 'white'}} tooltip="Show Menu" onClick={this.handleToggle}>
            <Menu />
        </IconButton>
        <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
            <MenuItem onClick={this.handleClose}>
                <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
                <Link to="/login">Login</Link>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
                <Link to="/testing">Testing</Link>
            </MenuItem>
        </Drawer>
      </div>
    );
  }
}