import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Builder from "./Builder";
import Stalker from './Stalker';


const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    cardConversionGraph: {
        width: '90%',
        margin: '0 6px',
    },
    cardConversionTable: {
        overflowX: 'auto',
    },
};

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

class Explorer extends Component {
    constructor(props) {
        super(props);

        console.log(props.parentState);
    }

    state = {
        tabValue: this.props.parentState.Explorer.tabValue,
    };

    handleTabChange = (event, tabValue) => {
        this.setState({tabValue});

        this.props.updateDash('tabValue', tabValue);
    };

    // For child elements to update dash state
    updateDashBuilder = (val) => {
        this.setState({
            Builder: val
        });
    };

    render() {
        const {tabValue} = this.state;

        return (
            <div className="explorerComponent">
                <h3>Explorer</h3>

                <Tabs
                    value={this.state.tabValue}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleTabChange}
                    style={{display: 'inline-block'}}
                    centered
                >
                    <Tab label="Deep Dive"/>
                    <Tab label="Stalker"/>
                    <Tab label="Builder"/>
                </Tabs>

                {tabValue === 0 && <TabContainer>

                </TabContainer>}

                {tabValue === 1 && <TabContainer>
                    <Stalker/>
                </TabContainer>}

                {tabValue === 2 && <TabContainer>

                    <Builder parentState={this.props.parentState} updateDash={this.updateDashBuilder}/>
                </TabContainer>}

            </div>
        )
    }
}

export default withStyles(styles)(Explorer);