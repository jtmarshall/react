import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/material-dashboard.css';
import StatusView from './views/status.view';
import FofView from './views/fof.view';
import { Link } from 'react-router-dom';
import Nav from './nav/nav-drawer';


class App extends Component {
    state = {
        SelectedFacilities: [],
    };

    baseUrl = process.env.PUBLIC_URL;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
              <Link to="/">
                  Acadia Monitoring
              </Link>
          </h1>
        </header>

          <Switch>
              <Route exact path={this.baseUrl + "/"} render={()=><StatusView selected={this.state.SelectedFacilities} />} />
              <Route path='/404' render={()=><FofView selected={this.state.SelectedFacilities} />} />
          </Switch>
      </div>
    );
  }
}

export default App;
