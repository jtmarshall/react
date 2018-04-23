import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/material-dashboard.css';
import DomainCard from './components/domain-card';


var legendSales = {
  names: ["Open", "Click", "Click Second Time"],
  types: ["info", "danger", "warning"]
};

var domains = ["Duffy's", "Galax", "Burkwood"];
// var domains = {
//   "Duffy's": 0,
//   "Galax": 1,
//   "Burkwood": 0
// };

class App extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Monitor Status</h1>
        </header>
        <p className="App-intro">
          <code>Recent Domain Activity</code>
        </p>
        <div className="content">
          {/* Iterate over domains list to create card for each one */}
          {domains.map(function(name, index){
            return <DomainCard 
              statsIcon="fa fa-history"
              key={index}
              id="chartHours"
              domain={name}
              category="24 Hours performance"
              stats="Updated 3 minutes ago"
              content={
                <div className="ct-chart">
                  Graph Here
                </div>
              }
            />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
