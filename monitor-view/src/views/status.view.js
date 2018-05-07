import React, {Component} from 'react';
import DomainCard from '../components/domain-card';
import api from '../components/actions/api';
import AlphaNav from './alphaBar';
import FacilityAutoComplete from './facilityAutoComplete';

class StatusView extends Component {

    constructor(props){
        super(props);
        this.state = {
            domainObj: {
                "www.acadiahealthcare.com" : {
                    LastUpdate: " "
                }
            },
            lastUpdate: " ",
        };
        // get status data obj on startup
        this.retrieve();
    }

    // Get status data from monitor endpoint
    retrieve = () => {
        api.status.getStatusInfo().then(resp => {
            console.log(resp);
            this.setState({
                domainObj: resp,
                lastUpdate: resp["www.acadiahealthcare.com"].LastUpdate
            });
        });
    };

    render() {

        const domainObj = this.state.domainObj;

        return (

            <div className="content">
                <AlphaNav/>
                <FacilityAutoComplete/>
                <h4><code>Updated: {this.state.lastUpdate}</code></h4>
                {/* Check whether we have data to show, then create a card for each domain */}

                {domainObj ? (Object.keys(domainObj).map(function (keyName, keyIndex) {
                    // Use keyName to get current key's name, domainObj[keyName] to get value
                    return <DomainCard
                        statsIcon="fa fa-history"
                        key={keyIndex}
                        statusCode={domainObj[keyName].Status}
                        statusInfo={domainObj[keyName]}
                        id={keyName}
                        domain={keyName}
                        cardText="Last Week"
                        stats="Last Outage: "
                        content={
                            <div className="ct-chart">
                                Graph Here
                            </div>
                        }
                    />;
                })) : (<p> Could Not Get Data </p>)
                }
            </div>
        );
    }
}

export default StatusView;