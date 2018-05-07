import React, {Component} from 'react';
import DomainCard from '../components/domain-card';
import api from '../components/actions/api';
import FacilityAutoComplete from './facilityAutoComplete';

class StatusView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            domainObj: {},
            lastUpdate: " ",
            selectedFacilities: [],
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

    // Updates the selected facility list
    selectedUpdate = (val) => {
        this.setState({
            selectedFacilities: val
        });
        console.log(val);
    };

    render() {
        const domainObj = this.state.domainObj;
        const selected = this.state.selectedFacilities;

        if (selected.length > 0) {
            return (
                <div className="content">
                    <FacilityAutoComplete onUpdate={this.selectedUpdate}/>
                    <h4><code>Updated: {this.state.lastUpdate}</code></h4>
                    {
                        (Object.keys(domainObj).map(function (keyName, keyIndex) {
                            // check if facility name is in the selected list before it gets rendered
                            if (selected.includes(domainObj[keyName].FacilityName)) {
                                // Use keyName to get current key's name, domainObj[keyName] to get value
                                return <DomainCard
                                    isSelected={true}
                                    statsIcon="fa fa-history"
                                    key={keyIndex}
                                    statusCode={domainObj[keyName].Status}
                                    statusInfo={domainObj[keyName]}
                                    id={keyName}
                                    domain={keyName}
                                    cardText="Last Week"
                                    stats="Last Outage: "
                                />
                            }
                        }))
                    }

                </div>
            );
        } else {
            return (
                <div className="content">
                    <FacilityAutoComplete onUpdate={this.selectedUpdate}/>
                    <h4><code>Updated: {this.state.lastUpdate}</code></h4>
                    {/* Check whether we have data to show, then create a card for each domain */}

                    {domainObj ? (Object.keys(domainObj).map(function (keyName, keyIndex) {
                        // Use keyName to get current key's name, domainObj[keyName] to get value
                        return <DomainCard
                            isSelected={true}
                            statsIcon="fa fa-history"
                            key={keyIndex}
                            statusCode={domainObj[keyName].Status}
                            statusInfo={domainObj[keyName]}
                            id={keyName}
                            domain={keyName}
                            cardText="Last Week"
                            stats="Last Outage: "
                        />
                    })) : (<p> Could Not Get Data </p>)
                    }
                </div>
            );
        }


    }
}

export default StatusView;