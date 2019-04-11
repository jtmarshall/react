import React, {Component} from 'react';
import Card from '../../tools/Card/Card';
import CardHeader from "../../tools/Card/CardHeader";
import CardBody from '../../tools/Card/CardBody';
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TouchChart from './touchChart';


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

class Touch extends Component {
    constructor(props) {
        super(props);

        console.log(props.parentState);
    }

    state = {
        tabValue: this.props.parentState.Touch.tabValue,

    };

    handleTabChange = (event, tabValue) => {
        this.setState({tabValue});

        this.props.updateDash('tabValue', tabValue);
    };

    render() {
        const {classes} = this.props;
        const {tabValue} = this.state;

        return (
            <div className="touchComponent">
                <h3>Touch</h3>

                <Tabs
                    value={this.state.tabValue}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleTabChange}
                    style={{display: 'inline-block'}}
                >
                    <Tab label="First"/>
                    <Tab label="Mid"/>
                    <Tab label="Last"/>
                </Tabs>

                {tabValue === 0 && <TabContainer>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className="cardTitleWhite">First Touch v Conversion</h4>
                        </CardHeader>
                        <CardBody className={classes.cardConversionTable}>
                            <TouchChart/>
                        </CardBody>
                    </Card>
                </TabContainer>}

                {tabValue === 1 && <TabContainer>
                    <Card>
                        <CardHeader color="info">
                            <h4 className="cardTitleWhite">Mid Touch</h4>
                        </CardHeader>
                        <CardBody className={classes.cardConversionTable}>

                        </CardBody>
                    </Card>
                </TabContainer>}

                {tabValue === 2 && <TabContainer>
                    <Card>
                        <CardHeader color="prime">
                            <h4 className="cardTitleWhite">Last Touch</h4>
                        </CardHeader>
                        <CardBody className={classes.cardConversionTable}>

                        </CardBody>
                    </Card>
                </TabContainer>}

            </div>
        )
    }
}

export default withStyles(styles)(Touch);