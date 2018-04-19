import React, { Component } from 'react';
import { Route } from "react-router-dom";
import TestPage from "./components/TestPage";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import './App.css';
import UserInfo from './components/user-info';
import Projects from './components/projects';
import Login from './components/login';
import TopNav from './components/topbar/topNav';


class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          title: 'Facilities',
          category: 'Call Data'
        },
        {
          title: 'Exports',
          category: 'Channels'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <TopNav />
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/testing" exact component={TestPage} />
      </div>
    );
  }
}

export default App;
