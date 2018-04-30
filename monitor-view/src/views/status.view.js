import React, {Component} from 'react';
import DomainCard from '../components/domain-card';
import api from '../components/actions/api';

class StatusView extends Component {

    constructor(props){
        super(props);
        this.state = {
            domainObj: {
                "domain.com" : 200
            }
        };
        // get status data obj on startup
        this.retrieve();
    }

    // Get status data from monitor endpoint
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
                {/* Check whether we have data to show, then create a card for each domain */}

                {domainObj ? (Object.keys(domainObj).map(function (keyName, keyIndex) {
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
                })) : (<p> Could Not Get Data </p>)
                }
            </div>
        );
    }
}

export default StatusView;