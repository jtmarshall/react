import React, {Component} from 'react';
import Card from '../../tools/Card/Card';
import CardHeader from "../../tools/Card/CardHeader";
import CardBody from '../../tools/Card/CardBody';
import withStyles from "@material-ui/core/styles/withStyles";
import USAMap from "react-usa-map";
import './Geo.css';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/es/Divider/Divider";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


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

class Geo extends Component {

    state = {
        geoView: 'state',
        mapDatatype: 'call',
        currentState: '',
        customConfig: '',
    };

    componentDidMount() {
        // Mouseover geo map event listener
        const geoMapElement = document.querySelector(".us-state-map");
        geoMapElement.addEventListener("mouseover", event => {
            // this.state.currentState = event.target.dataset.name;
            this.setState({
                currentState: event.target.dataset.name
            });
        });

        this.statesCustomConfig();
    }

    // Mandatory for maps library
    mapHandler = (event) => {
        alert('Click handler for: ' + event.target.dataset.name);
    };

    // Configuration for display map data
    statesCustomConfig = () => {
        let colors = ['#58A4BD', '#54BB97', '#50B956', '#87B74D', '#B14268', '#AF3FA8'];
        if (this.state.geoView === 'bubble') {
            colors = ['#92ddc8', '#81b69d', '#5aa17f', '#137a63', '#0a3a2a', ''];
        }
        if (this.state.customConfig === '') {
            this.setState({
                customConfig: {
                    "AL": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "AK": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "AZ": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "AR": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "CA": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "CO": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "CT": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "DC": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "DE": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "FL": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "GA": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "HI": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "ID": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "IL": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "IN": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "IA": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "KS": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "KY": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "LA": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "ME": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "MD": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "MA": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "MI": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "MN": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "MS": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "MO": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "MT": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "NE": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "NV": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "NH": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "NJ": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                        // clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
                    },
                    "NM": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "NY": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "NC": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "ND": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "OH": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "OK": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "OR": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "PA": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "RI": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "SC": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "SD": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "TN": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "TX": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "UT": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "VT": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "VA": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "WA": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "WV": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "WI": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    },
                    "WY": {
                        fill: colors[Math.floor(Math.random() * Math.floor(6))]
                    }
                }
            });
        } else {
            return this.state.customConfig;
        }
    };

    // update touch makeup filter state
    handleSelect = name => event => {
        this.setState({
            [name]: event.target.value,
            customConfig: ''
        });
    };

    render() {
        const {classes} = this.props;
        const c = this.state.currentState;

        return (
            <div className="geoComponent">

                <h3>Geo</h3>
                <Card>
                    <CardHeader color="prime">
                        <h4 className="cardTitleWhite">Conversion Heat Map (U.S.)</h4>
                    </CardHeader>
                    <CardBody className={classes.cardConversionTable}>
                        <div style={{paddingBottom: '20px', textAlign: 'left'}}>
                            <FormControl style={{width: '180px', textAlign: 'center', padding: '6px'}}>
                                <InputLabel htmlFor="filterGeoView">Map View</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    value={this.state.geoView}
                                    onChange={this.handleSelect('geoView')}
                                    inputProps={{
                                        name: 'geoView',
                                        id: 'filterGeoView',
                                    }}
                                >
                                    <MenuItem value={'state'}>State</MenuItem>
                                    <MenuItem value={'bubble'}>Bubble</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl style={{width: '180px', textAlign: 'center', padding: '6px'}}>
                                <InputLabel htmlFor="filterMapDatatype">Map Datatype</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    value={this.state.mapDatatype}
                                    onChange={this.handleSelect('mapDatatype')}
                                    inputProps={{
                                        name: 'mapDatatype',
                                        id: 'filterMapDatatype',
                                    }}
                                >
                                    <MenuItem value={'call'}>Calls</MenuItem>
                                    <MenuItem value={'inquiry'}>Inquiries</MenuItem>
                                    <MenuItem value={'admit'}>Admits</MenuItem>
                                </Select>
                            </FormControl>
                            <ul className="geoLegend">
                                <li>
                                    <div className="color-box" style={{backgroundColor: '#58A4BD'}}></div>
                                    0 - 9
                                </li>
                                <li>
                                    <div className="color-box" style={{backgroundColor: '#54BB97'}}></div>
                                    10 - 19
                                </li>
                                <li>
                                    <div className="color-box" style={{backgroundColor: '#50B956'}}></div>
                                    20 - 29
                                </li>
                                <li>
                                    <div className="color-box" style={{backgroundColor: '#87B74D'}}></div>
                                    30 - 49
                                </li>
                                <li>
                                    <div className="color-box" style={{backgroundColor: '#B14268'}}></div>
                                    50 - 74
                                </li>
                                <li>
                                    <div className="color-box" style={{backgroundColor: '#AF3FA8'}}></div>
                                    75+
                                </li>
                            </ul>
                        </div>
                        <br/>

                        <div className="col-lg-12" style={{display: 'inline-flex'}}>
                            <div className="col-lg-4" style={{minWidth: '240px', padding: '12px'}}>
                                <Card>
                                    <CardBody>
                                        <h3>Info</h3>
                                        <Divider/>
                                        <List style={{float: 'left'}}>
                                            <ListItem>
                                                <ListItemText primary={"State: " + c} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary={"Conversions: "} />
                                            </ListItem>
                                        </List>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-lg-8" >
                                <USAMap className="tooltip" customize={this.statesCustomConfig()}
                                        onClick={this.mapHandler}
                                        title={""}>
                            <span id="tooltip-span">
                                <img alt="" src="http://www.google.com/images/srpr/logo4w.png"/>
                            </span>
                                </USAMap>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(Geo);