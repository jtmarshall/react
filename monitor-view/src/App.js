import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/material-dashboard.css';
import StatusView from './views/status.view';
import FofView from './views/fof.view';
import Nav from './nav/nav';
import NavDrawer from './nav/nav-drawer';

class App extends Component {
    state = {
        SelectedFacilities: [],
    };

    baseUrl = process.env.PUBLIC_URL;

  render() {
    return (
      <div className="App">
          <NavDrawer/>
        <header className="App-header">
          <h1 className="App-title">
              <Link to="/">Acadia Monitoring</Link>
          </h1>
        </header>
        <Route path={this.baseUrl + "/"} exact render={()=><StatusView selected={this.state.SelectedFacilities} />} />
          <Route path={this.baseUrl + "/404"} component={FofView}/>
      </div>
    );
  }
}

export default App;
