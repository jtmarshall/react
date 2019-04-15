import React, {Component} from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import FormControl from "@material-ui/core/FormControl/FormControl";
import Button from "@material-ui/core/Button/Button";


export default class Builder extends Component {
    constructor(props) {
        super(props);

        console.log(props.parentState);

        this.state = {
            Columns: this.props.parentState.Builder.Columns != null ? this.props.parentState.Builder.Columns : [],
            Rows: [
                {
                    id: 1,
                    name: 'Row Data'
                },
                {
                    id: 2,
                    name: 'Row Data'
                },
                {
                    id: 3,
                    name: 'Row Data'
                },
                {
                    id: 4,
                    name: 'Row Data'
                }
            ],
        }
    }

    handleColumnSelect = name => event => {

        this.setState({
            Columns: event.target.value
        });

        // send update to main state
        this.props.updateDash({
            Columns: event.target.value
        });
    };

    render() {
        let rows = this.state.Rows;
        let columns = this.state.Columns;

        return (
            <div className="builderComponent">
                <h3>Builder</h3>
                <ExpansionPanel style={{width: '90%', margin: 'auto', borderRadius: '4px'}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography>Control Panel</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{display: 'inline-block'}}>
                        <FormControl className="">
                            <InputLabel htmlFor="columnSelect">Columns</InputLabel>
                            <Select
                                className="skuFilterSelect"
                                multiple
                                value={this.state.Columns}
                                onChange={this.handleColumnSelect('Columns')}
                                inputProps={{
                                    name: 'columns',
                                    id: 'columnSelect',
                                }}
                            >
                                <MenuItem value={'Facility'}>Facility</MenuItem>
                                <MenuItem value={'Facility_Type'}>Facility Type</MenuItem>
                                <MenuItem value={'Domain'}>Domain</MenuItem>
                                <MenuItem value={'IP'}>IP</MenuItem>
                                <MenuItem value={'Session'}>Session</MenuItem>
                                <MenuItem value={'Passport'}>Passport</MenuItem>
                                <MenuItem value={'Phone_Number'}>Phone Number</MenuItem>
                                <MenuItem value={'Conversions'}>Conversions</MenuItem>
                                <MenuItem value={'Conversion_Type'}>Conversion Type</MenuItem>
                                <MenuItem value={'TOS'}>TOS</MenuItem>
                                <MenuItem value={'Pageviews'}>Pageviews</MenuItem>
                            </Select>
                            <br/>
                            <Button variant="contained"
                                    style={{backgroundColor: '#00C853', color: '#ffffff', margin: 'auto'}}>
                                Pull
                            </Button>
                        </FormControl>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <br/>

                <Paper style={{width: '90%', margin: 'auto'}}>
                    <Table className="cardTable">
                        <TableHead>
                            <TableRow>
                                {columns.map(col => {
                                    return (
                                        <TableCell key={col}>{col}</TableCell>
                                    );
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => {
                                return (
                                    <TableRow key={row.id}>
                                        {columns.map(col => {
                                            return (
                                                <TableCell key={col}>{row.id} data for {col}</TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}