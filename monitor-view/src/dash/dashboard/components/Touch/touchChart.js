import React, {Component} from "react";
import {Bar} from 'react-chartjs-2';
import toolbox from "../../tools/toolbox";
import moment from 'moment';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";


export class TouchChart extends Component {
    constructor(props) {
        super(props);

        // Retrieve local store
        let yakPak = toolbox.retrievePak();
        let toDate = yakPak == null ? new Date() : new Date(yakPak.DateFrame.To);
        let startDay = yakPak == null ? moment().add(-7, 'days') : moment(yakPak.DateFrame.From);
        let endDay = yakPak == null ? moment() : moment(yakPak.DateFrame.To);
        let numbDays = endDay.diff(startDay, 'days');

        let primaryLabels = [];
        let temp = moment(toDate);

        // Generate date labels starting with 'toDate' and iterating back through length of data
        for (let i = -1; i < numbDays; i++) {
            // parse date for how many days prior
            primaryLabels.unshift(moment(temp).subtract(i, 'd').format('M/D'));
        }

        this.state = {
            touchMakeup: 'medium',
            chartData: {
                labels: primaryLabels,
                datasets: [
                    {
                        label: "Touch - Directories",
                        backgroundColor: 'rgb(78,175,74)',
                        borderColor: '#4EAF4A',
                        borderWidth: 2,
                        fill: false,
                        data: [],  // chart data comes from props in domain-card
                        stack: 1,
                    },
                    {
                        label: "Touch - Internal Directories",
                        backgroundColor: '#377EB8',
                        borderColor: '#377EB8',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Touch - Lead Gen",
                        backgroundColor: '#FF6F00',
                        borderColor: '#FF6F00',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Touch - Other",
                        backgroundColor: '#AF1B3F',
                        borderColor: '#AF1B3F',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Touch - Placement",
                        backgroundColor: '#963484',
                        borderColor: '#963484',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Touch - Search",
                        backgroundColor: '#FFD600',
                        borderColor: '#FFD600',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Touch - Search Engine",
                        backgroundColor: '#73FBD3',
                        borderColor: '#73FBD3',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Touch - Sign Up",
                        backgroundColor: '#80A1C1',
                        borderColor: '#80A1C1',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Touch - Social",
                        backgroundColor: '#FF4081',
                        borderColor: '#FF4081',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Touch - Sponsorship",
                        backgroundColor: '#B388FF',
                        borderColor: '#B388FF',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Conversion - Directories",
                        yAxisID: 'b',
                        backgroundColor: 'rgb(78,175,74)',
                        borderColor: 'rgb(78,175,74)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Conversion - Internal Directories",
                        yAxisID: 'b',
                        backgroundColor: 'rgb(55,126,184)',
                        borderColor: 'rgb(55,126,184)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Conversion - Lead Gen",
                        yAxisID: 'b',
                        backgroundColor: 'rgb(255,111,0)',
                        borderColor: 'rgb(255,111,0)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Conversion - Other",
                        yAxisID: 'b',
                        backgroundColor: 'rgb(175,27,63)',
                        borderColor: 'rgb(175,27,63)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Conversion - Placement",
                        yAxisID: 'b',
                        backgroundColor: 'rgb(150,52,132)',
                        borderColor: 'rgb(150,52,132)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Conversion - Search",
                        yAxisID: 'b',
                        backgroundColor: 'rgb(255,214,0)',
                        borderColor: 'rgb(255,214,0)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Conversion - Search Engine",
                        yAxisID: 'b',
                        backgroundColor: 'rgb(115,251,211)',
                        borderColor: 'rgb(115,251,211)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Conversion - Sign Up",
                        yAxisID: 'b',
                        backgroundColor: 'rgb(128,161,193)',
                        borderColor: 'rgb(128,161,193)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Conversion - Social",
                        yAxisID: 'b',
                        backgroundColor: 'rgb(255,64,129)',
                        borderColor: 'rgb(255,64,129)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Conversion - Sponsorship",
                        yAxisID: 'b',
                        backgroundColor: 'rgb(179,136,255)',
                        borderColor: 'rgb(179,136,255)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                ]
            },
            chartOptions: {
                tooltips: {
                    titleFontSize: 0,
                    titleSpacing: 0,
                    callbacks: {
                        label: function (tooltipItem, data) {
                            let label = data.datasets[tooltipItem.datasetIndex].label + ' ' +
                                data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].pointLabel;
                            return label + ': (' + tooltipItem.yLabel + ')';
                        }
                    }
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Date'
                        },
                        time: {
                            unit: 'day',
                            displayFormats: {
                                quarter: 'MMM D'
                            }
                        },
                        distribution: 'series',
                    }],
                    yAxes: [{
                        id: 'a',
                        weight: 2,
                        position: 'left',
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Touches'
                        },
                        ticks: {
                            beginAtZero: true,
                        }
                        },
                        {
                            id: 'b',
                            weight: 1,
                            stacked: true,
                            position: 'right',
                            scaleLabel: {
                                display: true,
                                labelString: 'Conversions'
                            },
                            ticks: {
                                beginAtZero: true,
                            }
                        }
                    ]
                }
            },
        };
    }

    componentDidMount() {
        // Wait for component to mount before loading in data
        this.calculateDateRange();
    }

    // Grab the current stored date frame and label chart data
    calculateDateRange = () => {
        let yakPak = toolbox.retrievePak();

        // Check if we have comparison dates
        if (yakPak.DateFrame.CompareFrom !== '' && yakPak.DateFrame.CompareTo !== '') {
            let compareToDate = new Date(yakPak.DateFrame.CompareTo);
            let compareStartDay = moment(yakPak.DateFrame.CompareFrom);
            let compareEndDay = moment(yakPak.DateFrame.CompareTo);
            let compareNumbDays = compareEndDay.diff(compareStartDay, 'days');

            let tempLabels = [];

            for (let i = -1; i < compareNumbDays; i++) {
                // parse date for how many days prior
                let temp = new Date();
                temp.setDate(compareToDate.getDate() - i);
                tempLabels.unshift((compareToDate.getUTCMonth() + 1) + "/" + temp.getDate());
            }

            // Populate data with comparison dates
            this.populateData(this.state.chartData.labels, this.state.chartData);
        } else {
            this.populateData(this.state.chartData.labels, this.state.chartData);
        }
    };

    // Pass in calculated date labels, assign them to
    populateData = (dateLabels, tempObj) => {
        // Grab data from state if none passed in
        if (tempObj == null) {
            tempObj = this.state.chartData;
        }
        let datasets = tempObj.datasets.length;

        console.log(datasets);

        for (let i = 0; i < dateLabels.length; i++) {
            for (let j = 0; j < datasets; j++) {
                tempObj.datasets[j].data[i] = {
                    "x": dateLabels[i],
                    "y": Math.floor(Math.random() * Math.floor(20)),
                    "pointLabel": dateLabels[i]
                };
            }
        }

        console.log(tempObj);

        let dummyOptions = this.state.chartOptions;

        // Set state with fresh data
        //this.state.chartData = tempObj;
        //this.state.chartOptions = dummyOptions;
        this.setState({
            chartData: tempObj,
            chartOptions: dummyOptions,
        });
    };

    // update touch makeup filter state
    handleSelect = name => event => {
        this.setState({
            touchMakeup: event.target.value
        });
    };

    render() {
        return (
            <div className="reactChart">
                <div style={{paddingBottom: '20px', float: 'left'}}>
                    <FormControl style={{width: '200px'}}>
                        <InputLabel htmlFor="filterTouchMakeup">Touch Makeup</InputLabel>
                        <Select
                            className="skuFilterSelect"
                            value={this.state.touchMakeup}
                            onChange={this.handleSelect('touchMakeup')}
                            inputProps={{
                                name: 'touchMakeup',
                                id: 'filterTouchMakeup',
                            }}
                        >
                            <MenuItem value={'medium'}>Medium</MenuItem>
                            <MenuItem value={'source'}>Source</MenuItem>
                            <MenuItem value={'channel'}>Channel</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Bar
                    data={this.state.chartData}
                    options={this.state.chartOptions}
                />
            </div>
        );
    }
}

export default TouchChart;