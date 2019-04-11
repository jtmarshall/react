import React, {Component} from "react";
import {Bar} from 'react-chartjs-2';
import toolbox from "../../tools/toolbox";
import moment from 'moment';


export class FacilityVolumeChart extends Component {
    constructor(props) {
        super(props);

        // Retrieve local store
        let yakPak = toolbox.retrievePak();
        let toDate = yakPak == null ? new Date() : new Date(yakPak.DateFrame.To);
        // let startDay = yakPak == null ? moment().add(-7, 'days') : moment(yakPak.DateFrame.From);
        // let endDay = yakPak == null ? moment() : moment(yakPak.DateFrame.To);
        // let numbDays = endDay.diff(startDay, 'days');

        let primaryLabels = [];
        let temp = moment(toDate);

        // Generate date labels starting with 'toDate' and iterating back through length of data
        // for (let i = -1; i < numbDays; i++) {
        //     // parse date for how many days prior
        //     primaryLabels.unshift(moment(temp).subtract(i, 'd').format('M/D'));
        // }

        // Generate date labels starting with 'toDate' and iterating back through length of data
        for (let i = -1; i < 12; i++) {
            // parse date for how many days prior
            primaryLabels.unshift(moment(temp).subtract(i, 'months').format('MMM \'YY'));
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
                        label: 'Inquiries',
                        fill: false,
                        backgroundColor: "#fff",
                        borderColor: "#03DAC6",
                        borderCapStyle: 'butt',
                        borderDash: [10, 10],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        lineTension: .3,
                        pointBackgroundColor: "#fff",
                        pointBorderColor: "#03DAC6",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "#03DAC6",
                        pointHoverBorderColor: "#fff",
                        pointHoverBorderWidth: 2,
                        pointRadius: 4,
                        pointHitRadius: 10
                    },
                    {
                        data: [],
                        yAxisID: 'b',
                        type: 'line',
                        label: 'Admits',
                        fill: false,
                        backgroundColor: "#fff",
                        borderColor: "#018786",
                        borderCapStyle: 'butt',
                        borderJoinStyle: 'miter',
                        lineTension: .3,
                        pointBackgroundColor: "#fff",
                        pointBorderColor: "#018786",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "#018786",
                        pointHoverBorderColor: "#fff",
                        pointHoverBorderWidth: 2,
                        pointRadius: 4,
                        pointHitRadius: 10
                    },
                    {
                        label: "Referring",
                        backgroundColor: '#4EAF4A',
                        borderColor: '#4EAF4A',
                        borderWidth: 2,
                        fill: false,
                        data: [],  // chart data comes from props in domain-card
                        stack: 1,
                    },
                    {
                        label: "Direct",
                        backgroundColor: '#377EB8',
                        borderColor: '#377EB8',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Ad-Video",
                        backgroundColor: '#FF6F00',
                        borderColor: '#FF6F00',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Email",
                        backgroundColor: '#AF1B3F',
                        borderColor: '#AF1B3F',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Organic",
                        backgroundColor: '#963484',
                        borderColor: '#963484',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "Offline",
                        backgroundColor: '#FFD600',
                        borderColor: '#FFD600',
                        borderWidth: 2,
                        fill: false,
                        data: [],
                        stack: 1,
                    },
                    {
                        label: "CPC",
                        backgroundColor: '#80A1C1',
                        borderColor: '#80A1C1',
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
                            labelString: 'Calls'
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
                            labelString: 'Inquiries / Admits'
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

    render() {
        return (
            <div className="reactChart">

                <Bar
                    data={this.state.chartData}
                    options={this.state.chartOptions}
                    className='facilityBar'
                />
            </div>
        );
    }
}

export default FacilityVolumeChart;