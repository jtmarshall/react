import React, {Component} from 'react';
import Table from '../../tools/table.js';
import Card from '../../tools/Card/Card';
import CardHeader from "../../tools/Card/CardHeader";
import CardBody from '../../tools/Card/CardBody';
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import NivoPie from "./nivoPie";
//import moment from "moment/moment";
//import MaterialIcon from 'material-icons-react';
import LineChart from './lineChart';


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

class Conversion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabValue: this.props.parentState.Conversion.tabValue,
        };
    }

    handleTabChange = (event, tabValue) => {
        this.setState({tabValue});

        this.props.updateDash('tabValue', tabValue);
    };

    render() {
        const {classes} = this.props;
        const {tabValue} = this.state;

        return (
            <div className="conversionComponent">
                <h3>Conversion</h3>
                <Tabs
                    value={this.state.tabValue}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleTabChange}
                    style={{display: 'inline-block'}}
                >
                    <Tab label="Summary"/>
                    <Tab label="Tables"/>
                    <Tab label="Graphs"/>
                </Tabs>

                {tabValue === 0 && <TabContainer>
                    <NivoPie color={"prime"} title={"First Touch Summary"} chartCallData={[11, 14, 13, 8, 10, 12]}/>
                    <NivoPie color={"info"} title={"Converting Touch Summary"} chartCallData={[11, 14, 13, 8, 10, 12]}/>
                    <NivoPie color={"primary"} title={"Contributing Touch Summary"}
                             chartCallData={[11, 14, 13, 8, 10, 12]}/>
                </TabContainer>}

                {tabValue === 1 && <TabContainer>
                    <Card>
                        <CardHeader color="info">
                            <h4 className="cardTitleWhite">Channel Performance</h4>
                        </CardHeader>
                        <CardBody className={classes.cardConversionTable}>
                            <Table
                                tableHeaderColor="info"
                                tableHead={[
                                    "Network",
                                    "Total 5min",
                                    "Total Call",
                                    "Total 5min + Call",
                                    "Last Touch 5min",
                                    "Last Touch Call",
                                    "Last Touch 5min + Call",
                                    "1st Touch 5min",
                                    "1st Touch Call",
                                    "1st Touch 5min + Call"
                                ]}
                                tableData={[
                                    ["Search", "1001", "16", "7", "2", "5", "2", "5", "2", "5"],
                                    ["Display", "777", "11", "17", "9", "4", "1", "9", "7", "3"],
                                    ["Social", "263", "8", "15", "1", "3", "2", "5", "2", "0"],
                                ]}
                            />
                        </CardBody>
                    </Card>
                </TabContainer>}

                {tabValue === 2 && <TabContainer>
                    <Card>
                        <CardHeader color="prime">
                            <h4 className="cardTitleWhite">Conversions (Medium)</h4>
                        </CardHeader>
                        <CardBody className={classes.cardConversionTable}>
                            <LineChart chartOptions={{
                                           dataLabel: 'Calls',
                                           xName: 'Date',
                                           yName: ''
                                       }}/>
                        </CardBody>
                    </Card>
                </TabContainer>}
            </div>
        )
    }
}

export default withStyles(styles)(Conversion);