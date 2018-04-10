import React, { Component } from 'react';
import './App.css';
import UserInfo from './components/user-info';
import Projects from './components/projects';
import Login from './components/login';

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

export default App;
