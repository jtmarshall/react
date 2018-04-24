import React, { Component } from 'react';
import DomainCard from '../components/domain-card';

var legendSales = {
    names: ["Open", "Click", "Click Second Time"],
    types: ["info", "danger", "warning"]
};

console.log(typeof(legendSales));
  
var domains = ["Duffy's", "Galax", "Burkwood"];
var domainObj = {
  "Duffy's": false,
  "Galax": true,
  "Burkwood": false,
  "Cross Creek": false
};
  
class StatusView extends Component {
    render() {
      return (
        <div className="content">
          {/* Iterate over domains list to create card for each one */}
          {domains.map(function(name, index){
            return <DomainCard 
              statsIcon="fa fa-history"
              key={index}
              id="chartHours"
              domain={name}
              category="24 Hours performance"
              stats="Last Outage: "
              content={
                <div className="ct-chart">
                  Graph Here
                </div>
              }
            />;
          })}
          
          {Object.keys(domainObj).map(function(keyName, keyIndex) {
            // Use keyName to get current key's name, domainObj[keyName] to get value
            return <DomainCard 
              statsIcon="fa fa-history"
              key={keyIndex}
              isError={ domainObj[keyName] }
              id="chartHours"
              domain={ keyName }
              category="24 Hours performance"
              stats="Last Outage: "
              content={
                <div className="ct-chart">
                  Graph Here
                </div>
              }
            />;
          })}
        </div>
      );
    }
}

export default StatusView;