import React, {Component} from 'react';
import DomainCard from '../components/domain-card';
import api from '../components/actions/api';

// var domains = ["Duffy's", "Galax", "Burkwood"];
var testObj = {
    "Duffy's": false,
    "Galax": true,
    "Burkwood": false,
    "Cross Creek": false,
    "The Rose": true
};

class StatusView extends Component {

    constructor(props){
        super(props);
        this.state = {
            domainObj: {}
        };
        this.retrieve();
    }

    // state = {
    //     domainObj: {}
    // };

    retrieve = () => {
        api.status.getStatusInfo().then(resp => {
            console.log(resp);
            this.setState({
                domainObj: resp
            });
        });
    };

    render() {

        const domainObj = this.state.domainObj;

        return (
            <div className="content">
                {/* Iterate over domains list to create card for each one */}

                {/* {domains.map(function(name, index){
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
          })} */}

                {Object.keys(domainObj).map(function (keyName, keyIndex) {
                    // Use keyName to get current key's name, domainObj[keyName] to get value
                    return <DomainCard
                        statsIcon="fa fa-history"
                        key={keyIndex}
                        statusCode={domainObj[keyName]}
                        id="chartHours"
                        domain={keyName}
                        cardText="24 Hours performance"
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