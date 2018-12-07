import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import CardHeader from "../../tools/Card/CardHeader";
import CardBody from "../../tools/Card/CardBody";
import Table from "../../tools/table";
import Card from "../../tools/Card/Card";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import TextField from "@material-ui/core/TextField/TextField";
import Grid from '@material-ui/core/Grid';
import MaterialIcon from "material-icons-react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class Stalker extends Component {

    state = {
        searchMetric: "passport",
        user: "",
    };

    componentDidMount() {
        let id = 0;

        this.setState({
            user: id
        })
    }

    // update search metric selection
    handleSelect = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {match} = this.props;
        const id = match.params.id;

        return (
            <div className="stalkerComponent">
                <h3>{id}</h3>
                <form className="" noValidate autoComplete="off">
                    <FormControl style={{width: '120px', paddingRight: '8px'}} className="">
                        <InputLabel htmlFor="filterSearchMetric">Search Metric</InputLabel>
                        <Select
                            className="skuFilterSelect"
                            value={this.state.searchMetric}
                            onChange={this.handleSelect}
                            inputProps={{
                                name: 'searchMetric',
                                id: 'filterSearchMetric',
                            }}
                        >
                            <MenuItem value={'ip'}>IP</MenuItem>
                            <MenuItem value={'phone'}>Phone</MenuItem>
                            <MenuItem value={'passport'}>Passport</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="search"
                        label="Search IP/Phone/Passport"
                        type="search"
                        className=""
                        margin="dense"
                        style={{width: "400px"}}
                    />
                </form>
                <Grid container>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader color="info">
                                <h4 className="cardTitleWhite">User Info</h4>
                            </CardHeader>
                            <CardBody className="cardTable">
                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        <List>
                                            <ListItem>
                                                <MaterialIcon icon='fingerprint'/>
                                                <ListItemText
                                                    primary="7DZ04BUIMV"
                                                    secondary='Passport ID'
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <MaterialIcon icon='phone'/>
                                                <ListItemText
                                                    primary="555-555-5555"
                                                    secondary='Phone'
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <MaterialIcon icon='person'/>
                                                <ListItemText
                                                    primary="Bill"
                                                    secondary='Name'
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <MaterialIcon icon='public'/>
                                                <ListItemText
                                                    primary="N/A"
                                                    secondary='Geo'
                                                />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </CardBody>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardHeader color="info">
                                <h4 className="cardTitleWhite">User Metrics</h4>
                            </CardHeader>
                            <CardBody className="cardTable">
                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        <List>
                                            <ListItem>
                                                <MaterialIcon icon='phone_callback'/>
                                                <ListItemText
                                                    primary="1"
                                                    secondary='# of Calls'
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <MaterialIcon icon='flag'/>
                                                <ListItemText
                                                    primary="5"
                                                    secondary='# of Actions'
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <MaterialIcon icon='visibility'/>
                                                <ListItemText
                                                    primary="09/09/18"
                                                    secondary='First Encounter'
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <MaterialIcon icon='visibility_off'/>
                                                <ListItemText
                                                    primary="09/13/18"
                                                    secondary='Final Encounter'
                                                />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </CardBody>
                        </Card>
                    </Grid>
                </Grid>
                <Card>
                    <CardHeader color="prime">
                        <h4 className="cardTitleWhite">User Action Trail</h4>
                    </CardHeader>
                    <CardBody className="cardTable">
                        <Table
                            tableHeaderColor="prime"
                            tableHead={[
                                "Session ID",
                                "Date",
                                "Channel",
                                "Touch",
                                "Call?",
                                "Domain",
                                "URL",
                                "T.O.P.",
                            ]}
                            tableData={[
                                ["f34r4fvh5", "09/09/18", "Organic - Google", "First", "no", "timberlineknolls.com", "/admissions", "2m"],
                                ["f34r4fvh5", "09/09/18", "Organic - Google", "Contributing", "no", "timberlineknolls.com", "/depression", "6m"],
                                ["f34r4fvh5", "09/09/18", "Organic - Google", "Contributing", "no", "timberlineknolls.com", "/admissions/criteria", "2m"],
                                ["f34r4fvh5", "09/09/18", "Organic - Google", "Conversion", "yes", "timberlineknolls.com", "/programs", "3m"],
                                ["yui1sh965", "09/13/18", "Email - Other", "Final", "no", "burkwoodtreatmentcenter.com", "/lp", "5m"],
                            ]}
                        />
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default withRouter(Stalker);