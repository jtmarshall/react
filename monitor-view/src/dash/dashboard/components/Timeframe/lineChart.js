import React, {Component} from "react";
import {Bar} from 'react-chartjs-2';
import toolbox from "../../tools/toolbox";
import moment from 'moment';
import Switch from '@material-ui/core/Switch';


export class LineChart extends Component {
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
            showHistory: false,
            chartData: {
                labels: primaryLabels,
                datasets: [
                    {
                        data: [],
                        yAxisID: 'b',
                        type: 'line',
                        label: 'Conversions',
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
                    },{
                        id: 'b',
                        weight: 1,
                        stacked: false,
                        position: 'right',
                        scaleLabel: {
                            display: true,
                            labelString: 'Conversions'
                        },
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                }
            },
        };
    }

    componentDidMount() {
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
        this.setState({
            chartData: tempObj,
            chartOptions: dummyOptions,
        });
    };

    handleHistoryChange = name => event => {
        let labels = this.state.chartData.labels;
        console.log(event.target.checked);

        let tempChartD = {};
        if (event.target.checked) {
                tempChartD = {
                    labels: labels,
                    datasets: [
                        {
                            data: [],
                            yAxisID: 'b',
                            type: 'line',
                            label: 'Conversions',
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
                            label: "_Directories",
                            backgroundColor: 'rgb(78,175,74, 0.2)',
                            borderColor: 'rgb(78,175,74, 0.4)',
                            borderWidth: 2,
                            fill: false,
                            data: [],
                            stack: 2,
                        },
                        {
                            label: "_Internal Directories",
                            backgroundColor: 'rgb(55,126,184, 0.2)',
                            borderColor: 'rgb(55,126,184, 0.4)',
                            borderWidth: 2,
                            fill: false,
                            data: [],
                            stack: 2,
                        },
                        {
                            label: "_Lead Gen",
                            backgroundColor: 'rgb(255,111,0, 0.2)',
                            borderColor: 'rgb(255,111,0, 0.4)',
                            borderWidth: 2,
                            fill: false,
                            data: [],
                            stack: 2,
                        },
                        {
                            label: "_Other",
                            backgroundColor: 'rgb(175,27,63, 0.2)',
                            borderColor: 'rgb(175,27,63, 0.4)',
                            borderWidth: 2,
                            fill: false,
                            data: [],
                            stack: 2,
                        },
                        {
                            label: "_Placement",
                            backgroundColor: 'rgb(150,52,132, 0.2)',
                            borderColor: 'rgb(150,52,132, 0.4)',
                            borderWidth: 2,
                            fill: false,
                            data: [],
                            stack: 2,
                        },
                        {
                            label: "_Search",
                            backgroundColor: 'rgb(255,214,0, 0.2)',
                            borderColor: 'rgb(255,214,0, 0.4)',
                            borderWidth: 2,
                            fill: false,
                            data: [],
                            stack: 2,
                        },
                        {
                            label: "_Search Engine",
                            backgroundColor: 'rgb(115,251,211, 0.2)',
                            borderColor: 'rgb(115,251,211, 0.4)',
                            borderWidth: 2,
                            fill: false,
                            data: [],
                            stack: 2,
                        },
                        {
                            label: "_Sign Up",
                            backgroundColor: 'rgb(128,161,193, 0.2)',
                            borderColor: 'rgb(128,161,193, 0.4)',
                            borderWidth: 2,
                            fill: false,
                            data: [],
                            stack: 2,
                        },
                        {
                            label: "_Social",
                            backgroundColor: 'rgb(255,64,129, 0.2)',
                            borderColor: 'rgb(255,64,129, 0.4)',
                            borderWidth: 2,
                            fill: false,
                            data: [],
                            stack: 2,
                        },
                        {
                            label: "_Sponsorship",
                            backgroundColor: 'rgb(179,136,255, 0.2)',
                            borderColor: 'rgb(179,136,255, 0.4)',
                            borderWidth: 2,
                            fill: false,
                            data: [],
                            stack: 2,
                        },
                    ]
                }
        } else {
                tempChartD = {
                    labels: labels,
                    datasets: [
                        {
                            data: [],
                            yAxisID: 'b',
                            type: 'line',
                            label: 'Conversions',
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
                    ]
                }
        }

        this.setState({
            showHistory: event.target.checked,
            chartData: tempChartD,
        });

        console.log(this.state);
        // Then reload data
        this.populateData(labels, tempChartD);
    };


    render() {
        return (
            <div className="reactChart">
                <div style={{paddingBottom: '20px', float: 'right'}}>
                    Show History:
                    <Switch
                        checked={this.state.showHistory}
                        onChange={this.handleHistoryChange('showHistory')}
                        value="showHistory"
                        color="primary"
                    />
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