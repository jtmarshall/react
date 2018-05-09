import React, {Component} from 'react';
import DomainCard from '../components/domain-card';
import api from '../components/actions/api';
import FacilityAutoComplete from './facilityAutoComplete';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';

function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class StatusView extends Component {

    constructor(props) {
        super(props);

        // Check local storage for saved facilities
        let savedFacilities = localStorage.getItem("selectedFacilities") != null ?
            localStorage.getItem("selectedFacilities") : [];

        this.state = {
            domainObj: {},
            monthlyDomainObj: {},
            showMonthly: false,
            lastUpdate: " ",
            selectedFacilities: savedFacilities.length > 0 ? savedFacilities.split(',') : [],
            value: 0
        };
        // get status data obj on startup
        this.retrieve();
    }


    // Get status data from monitor endpoint
    retrieve = () => {
        // Get weekly status
        api.status.getStatusInfo().then(resp => {
            console.log(resp);
            this.setState({
                domainObj: resp,
                lastUpdate: resp["www.acadiahealthcare.com"].LastUpdate
            });
        });

        // Get monthly status
        api.status.getMonthlyStatusInfo().then(resp => {
            this.setState({
                monthlyDomainObj: resp
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

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const selected = this.state.selectedFacilities;
        const {value, domainObj, monthlyDomainObj} = this.state;

        if (selected.length > 0) {
            return (
                <div className="content">
                    <FacilityAutoComplete onUpdate={this.selectedUpdate}/>
                    <h4><code>Updated: {this.state.lastUpdate}</code></h4>
                    <Tabs value={value} onChange={this.handleChange} centered>
                        <Tab label="Weekly"/>
                        <Tab label="Monthly"/>
                    </Tabs>
                    {value === 0 && <TabContainer>
                        {
                            (Object.keys(domainObj).map((keyName, keyIndex) => {
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
                                    />
                                }
                            }))
                        }
                    </TabContainer>}
                    {value === 1 && <TabContainer>
                        {
                            (Object.keys(monthlyDomainObj).map((keyName, keyIndex) => {
                                // check if facility name is in the selected list before it gets rendered
                                if (selected.includes(monthlyDomainObj[keyName].FacilityName)) {
                                    // Use keyName to get current key's name, domainObj[keyName] to get value
                                    return <DomainCard
                                        isSelected={true}
                                        statsIcon="fa fa-history"
                                        key={keyIndex}
                                        statusCode={monthlyDomainObj[keyName].Status}
                                        statusInfo={monthlyDomainObj[keyName]}
                                        id={keyName}
                                        domain={keyName}
                                    />
                                }
                            }))
                        }
                    </TabContainer>}
                </div>
            );
        } else {
            return (
                <div className="content">
                    <FacilityAutoComplete onUpdate={this.selectedUpdate}/>
                    <h4>
                        <code>Updated: {this.state.lastUpdate}</code>
                    </h4>
                    <Tabs value={value} onChange={this.handleChange} centered>
                        <Tab label="Weekly"/>
                        <Tab label="Monthly"/>
                    </Tabs>
                    {value === 0 && <TabContainer>
                        {/* Check whether we have data to show, then create a card for each domain */}
                        {domainObj ? (Object.keys(domainObj).map((keyName, keyIndex) => {
                            // Use keyName to get current key's name, domainObj[keyName] to get value
                            return <DomainCard
                                isSelected={true}
                                statsIcon="fa fa-history"
                                key={keyIndex}
                                statusCode={domainObj[keyName].Status}
                                statusInfo={domainObj[keyName]}
                                id={keyName}
                                domain={keyName}
                            />
                        })) : (<p> Could Not Get Data </p>)
                        }
                    </TabContainer>}
                    {value === 1 && <TabContainer>
                        {/* Check whether we have data to show, then create a card for each domain */}
                        {monthlyDomainObj ? (Object.keys(monthlyDomainObj).map((keyName, keyIndex) => {
                            // Use keyName to get current key's name, domainObj[keyName] to get value
                            return <DomainCard
                                isSelected={true}
                                statsIcon="fa fa-history"
                                key={keyIndex}
                                statusCode={monthlyDomainObj[keyName].Status}
                                statusInfo={monthlyDomainObj[keyName]}
                                id={keyName}
                                domain={keyName}
                            />
                        })) : (<p> Could Not Get Data </p>)
                        }
                    </TabContainer>}
                </div>
            );
        }
    }
}

export default StatusView;