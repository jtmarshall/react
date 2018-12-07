import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import Table from '../../tools/table.js';
import Card from '../../tools/Card/Card';
import CardHeader from "../../tools/Card/CardHeader";
import CardBody from '../../tools/Card/CardBody';
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import moment from "moment";

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

class ConversionPath extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabValue: this.props.parentState.Conversion.tabValue,
            timeToShow: moment().subtract(1, 'month').format('MMMM'),
            topPieData: {
                labels: [
                    '1st',
                    '2nd',
                    '3rd',
                    '4th',
                    '5th'
                ],
                datasets: [{
                    backgroundColor: ["#4EAF4A", "#377EB8","#FF6F00","#AF1B3F","#963484"],
                    data: [72,39,25,16,4]
                }],
            },
            topPieOptions: {
                title: {
                    display: true,
                    text: 'Top 5 Paths'
                }
            },
            botPieData: {
                labels: [
                    '1st',
                    '2nd',
                    '3rd',
                    '4th',
                    '5th'
                ],
                datasets: [{
                    backgroundColor: ["#4EAF4A", "#377EB8","#FF6F00","#AF1B3F","#963484"],
                    data: [72,39,25,16,4]
                }],
            },
            botPieOptions: {
                title: {
                    display: true,
                    text: 'Worst 5 Paths'
                }
            },
        };
    }


    handleTabChange = (event, tabValue) => {
        this.setState({tabValue});

        this.props.updateDash('tabValue', tabValue);
    };

    render() {
        const {classes} = this.props;
        const timeFrameToShow = this.state.timeToShow;

        return (
            <div className="conversionComponent">
                <h3>Conversion Path</h3>
                <Card>
                    <CardHeader color="mint">
                        <h4 className="cardTitleWhite">Top 5 Channel Paths - {timeFrameToShow}</h4>
                    </CardHeader>
                    <CardBody className={classes.cardConversionTable}>
                        <Table
                            tableHeaderColor="success"
                            tableHead={[
                                "",
                                "First Touch",
                                "Middle Touch",
                                "Converting Touch",
                                "",
                                "Conversion Total"
                            ]}
                            tableData={[
                                ["1st", "Organic - Google", "Direct", "Email", "=", "72"],
                                ["2nd", "Referring", "Referring - Internal", "Referring - Other", "=", "39"],
                                ["3rd", "Paid Advertising", "Organic - Other", "Email - Lead Gen", "=", "25"],
                                ["4th", "Organic - Pinterest", "Email", "Direct", "=", "16"],
                                ["5th", "Direct", "Organic - Other", "Email - Lead Gen", "=", "4"],
                            ]}
                        />
                        <Doughnut
                            data={this.state.topPieData}
                            options={this.state.topPieOptions}
                        />
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader color="danger">
                        <h4 className="cardTitleWhite">Bottom 5 Channel Paths - {timeFrameToShow}</h4>
                    </CardHeader>
                    <CardBody className={classes.cardConversionTable}>
                        <Table
                            tableHeaderColor="danger"
                            tableHead={[
                                "",
                                "First Touch",
                                "Middle Touch",
                                "Converting Touch",
                                "",
                                "Conversion Total"
                            ]}
                            tableData={[
                                ["1st", "Organic - Google", "Direct", "Email", "=", "-72"],
                                ["2nd", "Referring", "Referring - Internal", "Referring - Other", "=", "-39"],
                                ["3rd", "Paid Advertising", "Organic - Other", "Email - Lead Gen", "=", "-25"],
                                ["4th", "Organic - Pinterest", "Email", "Direct", "=", "-16"],
                                ["5th", "Direct", "Organic - Other", "Email - Lead Gen", "=", "-4"],
                            ]}
                        />
                        <Doughnut
                            data={this.state.botPieData}
                            options={this.state.botPieOptions}
                        />
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(ConversionPath);