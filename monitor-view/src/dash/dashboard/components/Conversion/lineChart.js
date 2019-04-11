import React, {Component} from "react";
import {Bar} from 'react-chartjs-2';
import toolbox from "../../tools/toolbox";
import moment from 'moment';
import Button from "@material-ui/core/Button/Button";

export class LineChart extends Component {
    constructor(props) {
        super(props);

        // Retrieve local store
        let yakPak = toolbox.retrievePak();
        let toDate = new Date(yakPak.DateFrame.To);
        let startDay = moment(yakPak.DateFrame.From);
        let endDay = moment(yakPak.DateFrame.To);
        let numbDays = endDay.diff(startDay, 'days');

        let primaryLabels = [];
        let temp = moment(toDate);

        // Generate date labels starting with 'toDate' and iterating back through length of data
        for (let i = -1; i < numbDays; i++) {
            // parse date for how many days prior
            primaryLabels.unshift(moment(temp).subtract(i, 'd').format('M/D'));
        }

        this.state = {
            chartData: {
                labels: primaryLabels,
                datasets: [
                    {
                        label: "Directories",
                        backgroundColor: 'rgb(78,175,74)',
                        borderColor: '#4EAF4A',
                        borderWidth: 2,
                        fill: false,
                        data: [],  // chart data comes from props in domain-card
                        stack: 1,
                    },
                    {
                        label: "Internal Directories",
                        backgroundColor: '#377EB8',
                        borderColor: '#377EB8',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Lead Gen",
                        backgroundColor: '#FF6F00',
                        borderColor: '#FF6F00',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Other",
                        backgroundColor: '#AF1B3F',
                        borderColor: '#AF1B3F',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Placement",
                        backgroundColor: '#963484',
                        borderColor: '#963484',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Search",
                        backgroundColor: '#FFD600',
                        borderColor: '#FFD600',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Search Engine",
                        backgroundColor: '#73FBD3',
                        borderColor: '#73FBD3',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Sign Up",
                        backgroundColor: '#80A1C1',
                        borderColor: '#80A1C1',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Social",
                        backgroundColor: '#FF4081',
                        borderColor: '#FF4081',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Sponsorship",
                        backgroundColor: '#B388FF',
                        borderColor: '#B388FF',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Directories",
                        backgroundColor: 'rgb(78,175,74, 0.2)',
                        borderColor: 'rgb(78,175,74, 0.4)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Internal Directories",
                        backgroundColor: 'rgb(55,126,184, 0.2)',
                        borderColor: 'rgb(55,126,184, 0.4)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Lead Gen",
                        backgroundColor: 'rgb(255,111,0, 0.2)',
                        borderColor: 'rgb(255,111,0, 0.4)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Other",
                        backgroundColor: 'rgb(175,27,63, 0.2)',
                        borderColor: 'rgb(175,27,63, 0.4)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Placement",
                        backgroundColor: 'rgb(150,52,132, 0.2)',
                        borderColor: 'rgb(150,52,132, 0.4)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Search",
                        backgroundColor: 'rgb(128,161,193, 0.2)',
                        borderColor: 'rgb(128,161,193, 0.4)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Search Engine",
                        backgroundColor: 'rgb(255,214,0, 0.2)',
                        borderColor: 'rgb(255,214,0, 0.4)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Sign Up",
                        backgroundColor: 'rgb(115,251,211, 0.2)',
                        borderColor: 'rgb(115,251,211, 0.4)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Social",
                        backgroundColor: 'rgb(255,64,129, 0.2)',
                        borderColor: 'rgb(255,64,129, 0.4)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        label: "Sponsorship",
                        backgroundColor: 'rgb(179,136,255, 0.2)',
                        borderColor: 'rgb(179,136,255, 0.4)',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 2,
                    },
                    {
                        data: [125, 140, 130, 160, 110, 150, 140, 120],
                        type: 'line',
                        label: 'Calls',
                        fill: false,
                        backgroundColor: "#fff",
                        borderColor: "#737373",
                        borderCapStyle: 'butt',
                        borderDash: [10, 10],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        lineTension: .3,
                        pointBackgroundColor: "#fff",
                        pointBorderColor: "#737373",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "#737373",
                        pointHoverBorderColor: "#737373",
                        pointHoverBorderWidth: 2,
                        pointRadius: 4,
                        pointHitRadius: 10
                    },
                ]
            },
            chartOptions: {
                tooltips: {
                    titleFontSize: 0,
                    titleSpacing: 0,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            let label = data.datasets[tooltipItem.datasetIndex].label + ' ' +
                                data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].pointLabel;
                            return label + ': (' + tooltipItem.yLabel + ')';
                        }
                    }
                },
                //responsive: true,
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: !!this.props.chartOptions.xName,  // coercion to bool, true if it exists
                            labelString: this.props.chartOptions.xName
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
                        stacked: true,
                        scaleLabel: {
                            display: !!this.props.chartOptions.yName,  // coercion to bool, true if it exists
                            labelString: this.props.chartOptions.yName
                        },
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                }
            }
        };

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
            this.populateData(this.state.chartData.labels, tempLabels);
        } else {
            this.populateData(this.state.chartData.labels);
        }
    };

    // Pass in calculated date labels, assign them to
    populateData = (dateLabels, compareLabels = null) => {
        let tempObj = this.state.chartData;
        let datasets = this.state.chartData.datasets.length;
        console.log(datasets);

        for (let i = 0; i < dateLabels.length; i++) {
            for (let j = 0; j < datasets-1; j++) {
                tempObj.datasets[j].data[i] = {
                    "x": dateLabels[i],
                    "y": Math.floor(Math.random() * Math.floor(20)),
                    "pointLabel": dateLabels[i]
                };
            }
            // tempObj.datasets[0].data[i] = {
            //     "x": dateLabels[i],
            //     "y": Math.floor(Math.random() * Math.floor(150)),
            //     "pointLabel": dateLabels[i]
            // };
            //
            // tempObj.datasets[1].data[i] = {
            //     "x": dateLabels[i],
            //     "y": Math.floor(Math.random() * Math.floor(400)),
            //     "pointLabel": dateLabels[i]
            // };
        }

        console.log(tempObj);


        // if (compareLabels != null) {
        //     let SecIndex = this.state.chartData.datasets.length+1;
        //     tempObj.datasets[SecIndex] = {
        //         label: "SEC Call",
        //         backgroundColor: '#C6FF00',
        //         borderColor: '#C6FF00',
        //         borderWidth: 2,
        //         fill: false,
        //         data: [],
        //         stack: 2,
        //     };
        //
        //     for (let i = 0; i < dateLabels.length; i++) {
        //         tempObj.datasets[SecIndex].data[i] = {
        //             "x": dateLabels[i],
        //             "y": compareLabels[i] == null ? 0 : Math.floor(Math.random() * Math.floor(20)),
        //             "pointLabel": compareLabels[i] == null ? "Out of Range" : compareLabels[i]
        //         };
        //     }
        // }

        let dummyOptions = this.state.chartOptions;
        // Set state with fresh data
        this.setState({
            chartData: tempObj,
            chartOptions: dummyOptions,
        });
    };

    convertToDay = () => {

    };

    convertToWeek = () => {
        let yakPak = toolbox.retrievePak();
        let toDate = moment(yakPak.DateFrame.To);
        let startDay = moment(yakPak.DateFrame.From);
        let numbWeeks = toDate.diff(startDay, 'week') +1;  // Add 1 because it doesn't count starting week
        console.log('Weeks: '+ numbWeeks);
    };

    convertToMonth = () => {
        let yakPak = toolbox.retrievePak();
        let toDate = moment(yakPak.DateFrame.To);
        let startDay = moment(yakPak.DateFrame.From);
        let numbMonths = toDate.diff(startDay, 'month') +1;  // Add 1 because it doesn't count starting month
        console.log('Months: '+ numbMonths);
    };

    render() {
        return (
            <div className="reactChart">
                <div style={{paddingBottom: '20px', float: 'right'}}>
                    <Button variant="outlined" disabled color="secondary">
                        Day
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={this.convertToWeek}>
                        Week
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={this.convertToMonth}>
                        Month
                    </Button>
                </div>
                <Bar
                    data={this.state.chartData}
                    options={this.state.chartOptions}
                />
            </div>
        );
    }
}

export default LineChart;