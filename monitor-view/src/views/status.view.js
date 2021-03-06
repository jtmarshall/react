import React, {Component} from 'react';
import DomainCard from '../components/domain-card';
import api from '../components/actions/api';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import FofView from "./fof.view";

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
    state = {
        domainObj: {},
        monthlyDomainObj: {},
        showMonthly: false,
        lastUpdate: " ",
        value: 0
    };

    componentWillMount() {
        // get status data obj on startup
        this.retrieve();
    }


    // Get status data from monitor endpoint
    retrieve = () => {
        // Get weekly status
        api.status.getStatusInfo().then(resp => {
            // console.log(resp);
            this.setState({
                domainObj: resp,
            });
        });

        // Get monthly status
        api.status.getMonthlyStatusInfo().then(resp => {
            this.setState({
                monthlyDomainObj: resp
            });
        });
    };

    // Updates tabs
    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const selected = this.props.selected;
        const {value, domainObj, monthlyDomainObj} = this.state;
        console.log(domainObj);

        if (selected.length > 0) {
            return (
                <div className="content">
                    <h3>Site Status</h3>
                    <Tabs value={value} onChange={this.handleChange} centered>
                        <Tab label="Weekly"/>
                        <Tab label="Monthly"/>
                        <Tab label="404 List"/>
                        <Link to="/manual_crawl">
                            <Tab label="Start Crawl"/>
                        </Link>
                    </Tabs>
                    {value === 0 && <TabContainer>
                        {domainObj ? (Object.keys(domainObj).map((keyName, keyIndex) => {
                            // check if facility name is in the selected list before it gets rendered
                            if (selected.includes(domainObj[keyName].FacilityName)) {
                                // Use keyName to get current key's name, domainObj[keyName] to get value
                                return (<DomainCard
                                    isSelected={true}
                                    statsIcon="fa fa-history"
                                    key={keyIndex}
                                    statusCode={domainObj[keyName].Status}
                                    statusInfo={domainObj[keyName]}
                                    id={keyName}
                                    domain={keyName}
                                />);
                            }
                        })) : (<p> Could Not Get Data </p>)
                        }
                    </TabContainer>}
                    {value === 1 && <TabContainer>
                        {monthlyDomainObj ? (Object.keys(monthlyDomainObj).map((keyName, keyIndex) => {
                            // check if facility name is in the selected list before it gets rendered
                            if (selected.includes(monthlyDomainObj[keyName].FacilityName)) {
                                // Use keyName to get current key's name, domainObj[keyName] to get value
                                return (<DomainCard
                                    isSelected={true}
                                    statsIcon="fa fa-history"
                                    key={keyIndex}
                                    statusCode={monthlyDomainObj[keyName].Status}
                                    statusInfo={monthlyDomainObj[keyName]}
                                    id={keyName}
                                    domain={keyName}
                                />);
                            }
                        })) : (<p> Could Not Get Data </p>)
                        }
                    </TabContainer>}
                    {value === 2 && <TabContainer>
                        <FofView selected={selected}/>
                    </TabContainer>}
                </div>
            );
        } else {
            return (
                <div className="content">
                    <h3>Site Status</h3>
                    <Tabs value={value} onChange={this.handleChange} centered>
                        <Tab label="Weekly"/>
                        <Tab label="Monthly"/>
                        <Tab label="404 List"/>
                        <Link to="/manual_crawl">
                            <Tab label="Start Crawl"/>
                        </Link>
                    </Tabs>
                    {value === 0 && <TabContainer>
                        {/* Check whether we have data to show, then create a card for each domain */}
                        {domainObj ? (Object.keys(domainObj).map((keyName, keyIndex) => {
                            // Use keyName to get current key's name, domainObj[keyName] to get value
                            return (<DomainCard
                                isSelected={true}
                                statsIcon="fa fa-history"
                                key={keyIndex}
                                statusCode={domainObj[keyName].Status}
                                statusInfo={domainObj[keyName]}
                                id={keyName}
                                domain={keyName}
                            />);
                        })) : <p>Could Not Get Data</p>
                        }
                    </TabContainer>}
                    {value === 1 && <TabContainer>
                        {/* Check whether we have data to show, then create a card for each domain */}
                        {monthlyDomainObj ? (Object.keys(monthlyDomainObj).map((keyName, keyIndex) => {
                            // Use keyName to get current key's name, domainObj[keyName] to get value
                            return (<DomainCard
                                isSelected={true}
                                statsIcon="fa fa-history"
                                key={keyIndex}
                                statusCode={monthlyDomainObj[keyName].Status}
                                statusInfo={monthlyDomainObj[keyName]}
                                id={keyName}
                                domain={keyName}
                            />);
                        })) : <p>Could Not Get Data</p>
                        }
                    </TabContainer>}
                    {value === 2 && <TabContainer>
                        <FofView selected={selected}/>
                    </TabContainer>}
                </div>
            );
        }
    }
}

export default StatusView;