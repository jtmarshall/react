import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/material-dashboard.css';
import DomainCard from './components/domain-card';
import StatusView from './views/status.view';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Monitor Status</h1>
        </header>
        <p className="App-intro">
          <code>Recent Domain Activity</code>
        </p>
        <Route path="/" exact component={StatusView} />
      </div>
    );
  }
}

export default App;
