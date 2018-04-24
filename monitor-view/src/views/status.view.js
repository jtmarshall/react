import React, { Component } from 'react';
import DomainCard from '../components/domain-card';

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
        </div>
      );
    }
}

export default StatusView;