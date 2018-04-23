import React, { Component } from 'react';
import { Route } from "react-router-dom";
import UserInfo from './user-info';
import Projects from './projects';
import Login from './login';

class TestPage extends Component {
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
        <div className="Testing">
          <header className="App-header">
            <h1 className="App-title">YAK React</h1>
          </header>
          <p className="App-intro">
            <code>Testing Functions:</code>
          </p>
          <Login />
  
          <code>Dynamic List:</code>
          <Projects projects={this.state.projects} />
        </div>
    );
  }
}

export default TestPage;
