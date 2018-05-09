import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/material-dashboard.css';
import StatusView from './views/status.view';

class App extends Component {
    state = {
        SelectedFacilities: [],
    };

    baseUrl = process.env.PUBLIC_URL;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Acadia Site Status</h1>
        </header>
        <Route path={this.baseUrl + "/"} exact render={()=><StatusView selected={this.state.SelectedFacilities} />} />
      </div>
    );
  }
}

export default App;
