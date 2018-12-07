import React from 'react';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import MaterialIcon from "material-icons-react";
import Button from "@material-ui/core/Button/Button";
import Tooltip from '@material-ui/core/Tooltip';
import Drawer from '@material-ui/core/Drawer';
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import FormControl from "@material-ui/core/FormControl/FormControl";


class DatePicker extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        top: false,
        dateDenomination: 'custom',
    };

    // Updates the selected facility list
    updateToDate = (val) => {
        let dateFrame = {
            From: this.props.dateFrame.From,
            To: val
        };

        // Check if input To date is before current From date; adjust From date (-1) if so
        if (val < this.props.dateFrame.From) {
            dateFrame.From = moment(val).subtract(1, 'days').format('YYYY-MM-DD');
        }

        // Push update to Dash state
        this.props.onUpdate(dateFrame);
    };

    // Updates the selected facility list
    updateFromDate = (val) => {
        let dateFrame = {
            From: val,
            To: this.props.dateFrame.To
        };

        // Check if input From date is after current To date; adjust To date (+1) if so
        if (val > this.props.dateFrame.To) {
            dateFrame.To = moment(val).add(1, 'days').format('YYYY-MM-DD');
        }

        // Push update to Dash state
        this.props.onUpdate(dateFrame);
    };

    // Compare dates update for when month over month, w/w, etc. is selected
    updateCompareToDate = (val) => {
        let dateFrame = {
            From: this.props.dateFrame.From,
            To: this.props.dateFrame.To,
            CompareFrom: this.props.dateFrame.CompareFrom,
            CompareTo: val
        };

        // Check if input To date is before current From date; adjust From date (-1) if so
        if (val < this.props.dateFrame.CompareFrom) {
            dateFrame.CompareFrom = moment(val).subtract(1, 'days').format('YYYY-MM-DD');
        }

        // Push update to Dash state
        this.props.onUpdate(dateFrame);
    };

    updateCompareFromDate = (val) => {
        let dateFrame = {
            From: this.props.dateFrame.From,
            To: this.props.dateFrame.To,
            CompareFrom: val,
            CompareTo: this.props.dateFrame.CompareTo
        };

        // Check if input From date is after current To date; adjust To date (+1) if so
        if (val > this.props.dateFrame.CompareTo) {
            dateFrame.CompareTo = moment(val).add(1, 'days').format('YYYY-MM-DD');
        }

        // Push update to Dash state
        this.props.onUpdate(dateFrame);
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    // update date denomination
    handleDateDenominationSelect = name => event => {
        let dateDenom = event.target.value;

        this.setState({
            dateDenomination: dateDenom
        });

        // Initialize temp dates
        let tempTo;
        let tempFrom;

        // Set values for temp dates based on input
        switch (dateDenom) {
            case 'today':
                tempTo = moment();
                tempFrom = moment();
                break;
            case 'yesterday':
                tempTo = moment().subtract(1, 'days');
                tempFrom = moment().subtract(1, 'days');
                break;
            case 'lastWeek':
                tempTo = moment().subtract(1, 'weeks').endOf('week');
                tempFrom = moment().subtract(1, 'weeks').startOf('week');
                break;
            case 'lastMonth':
                tempTo = moment().subtract(1, 'months').endOf('month');
                tempFrom = moment().subtract(1, 'months').startOf('month');
                break;
            case 'last7':
                tempTo = moment();
                tempFrom = moment().subtract(7, 'days');
                break;
            case 'last30':
                tempTo = moment();
                tempFrom = moment().subtract(30, 'days');
                break;
            default:
                tempTo = moment(this.props.dateFrame.To);
                tempFrom = moment(this.props.dateFrame.From);

        }

        let dateFrame = {
            From: tempFrom.format('YYYY-MM-DD'),
            To: tempTo.format('YYYY-MM-DD'),
            CompareFrom: this.props.dateFrame.CompareFrom,
            CompareTo: this.props.dateFrame.CompareTo
        };

        // Push update to Dash state
        this.props.onUpdate(dateFrame);
    };

    // Remove comparison date range
    clearDates = () => {
        let dateFrame = {
            From: this.props.dateFrame.From,
            To: this.props.dateFrame.To,
            CompareFrom: '',
            CompareTo: ''
        };

        // Push update to Dash state
        this.props.onUpdate(dateFrame);
    };

    render() {
        return (
            <form className="col-lg-4 datePicker">
                <Tooltip title="Primary Start Date" placement="bottom">
                    <TextField
                        required={true}
                        id="dateFrom"
                        label="From"
                        type="date"
                        value={this.props.dateFrame.From}
                        onChange={(e) => this.updateFromDate(e.target.value)}
                        className="datePicker-textField"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Tooltip>
                <Tooltip title="Primary End Date" placement="bottom">
                    <TextField
                        required={true}
                        id="dateTo"
                        label="To"
                        type="date"
                        value={this.props.dateFrame.To}
                        onChange={(e) => this.updateToDate(e.target.value)}
                        className="datePicker-textField"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Tooltip>
                <Tooltip title="Compare Dates" placement="bottom">
                    <Button onClick={this.toggleDrawer('top', true)} style={{top: '5px'}}>
                        <MaterialIcon icon='compare_arrows' size={18} color=''/>
                    </Button>
                </Tooltip>

                <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
                    <div
                        style={{padding: 20, textAlign: 'center'}}
                        tabIndex={0}
                        role="button"
                    >
                        <div className="col-lg-12">
                            <FormControl style={{paddingRight: '20px'}}>
                                <InputLabel htmlFor="filterDateDenomination">Date Range</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    value={this.state.dateDenomination}
                                    onChange={this.handleDateDenominationSelect('dateDenomination')}
                                    inputProps={{
                                        name: 'dateDenomination',
                                        id: 'filterDateDenomination',
                                    }}
                                >
                                    <MenuItem value={'custom'}>Custom</MenuItem>
                                    <MenuItem value={'today'}>Today</MenuItem>
                                    <MenuItem value={'yesterday'}>Yesterday</MenuItem>
                                    <MenuItem value={'lastWeek'}>Last Week</MenuItem>
                                    <MenuItem value={'lastMonth'}>Last Month</MenuItem>
                                    <MenuItem value={'last7'}>Last 7 Days</MenuItem>
                                    <MenuItem value={'last30'}>Last 30 Days</MenuItem>
                                </Select>
                            </FormControl>
                            <Tooltip title="Secondary Start Date" placement="bottom">
                                <TextField
                                    required={true}
                                    id="dateCompareFrom"
                                    label="SEC From"
                                    type="date"
                                    value={this.props.dateFrame.CompareFrom}
                                    onChange={(e) => this.updateCompareFromDate(e.target.value)}
                                    className="datePicker-textField"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Tooltip>
                            <Tooltip title="Secondary End Date" placement="bottom">
                            <TextField
                                required={true}
                                id="dateCompareTo"
                                label="SEC To"
                                type="date"
                                value={this.props.dateFrame.CompareTo}
                                onChange={(e) => this.updateCompareToDate(e.target.value)}
                                className="datePicker-textField"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            </Tooltip>
                            <Button variant="contained" color="primary" onClick={this.props.refreshView}
                                    style={{backgroundColor: '#00C853', color: '#ffffff', marginRight: '10px'}}>
                                Apply
                            </Button>
                            <Button variant="contained" className="" onClick={this.clearDates}>
                                Clear
                            </Button>
                        </div>
                    </div>
                </Drawer>
            </form>
        );
    }
}

export default DatePicker;