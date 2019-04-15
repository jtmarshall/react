import React, {Component} from "react";
import {ResponsiveBar, ResponsiveLine} from 'nivo';
import toolbox from "../../tools/toolbox";
import CardHeader from "../../tools/Card/CardHeader";
import CardBody from "../../tools/Card/CardBody";
import Card from "../../tools/Card/Card";
import moment from 'moment';
import ReactChartkick, {LineChart} from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart);

export default class NivoLine extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: [
                {
                    "id": "Call",
                    "color": "hsl(337, 70%, 50%)", //"hsl(333, 70%, 50%)",
                    "data": [
                        {
                            "x": "9/1",
                            "y": 291
                        }
                    ]
                },
                {
                    "id": "5+ TOS",
                    "color": "hsl(237, 70%, 50%)",
                    "data": [
                        {
                            "x": "9/1",
                            "y": 153
                        }
                    ]
                }
            ],
            lineData: [
                {
                    "name": "Call",
                    "label": "test",
                    "data": {
                        "9/19": 100,

                    }
                },
                {
                    "name": "5+ TOS",
                    "data": {}
                }
            ]
        };
    }

    // Grab the current stored date frame and label chart data
    calculateDateRange = () => {
        // Retrieve local store
        let yakPak = toolbox.retrievePak();
        let toDate = new Date(yakPak.DateFrame.To);
        let startDay = moment(yakPak.DateFrame.From);
        let endDay = moment(yakPak.DateFrame.To);
        let numbDays = endDay.diff(startDay, 'days');

        let primaryLabels = [];

        // Generate date labels starting with 'toDate' and iterating back through length of data
        for (let i = -1; i < numbDays; i++) {
            // parse date for how many days prior
            let temp = new Date();
            temp.setDate(toDate.getDate() - i);
            primaryLabels.unshift((toDate.getUTCMonth() + 1) + "/" + temp.getDate());
        }

        console.log(primaryLabels);


        // Check if we have comparison dates
        if (yakPak.DateFrame.CompareFrom != '' && yakPak.DateFrame.CompareTo != '') {
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
            this.populateData(primaryLabels, tempLabels);
        } else {
            this.populateData(primaryLabels);
        }
    };

    // Pass in calculated date labels, assign them to
    populateData = (dateLabels, compareLabels = null) => {
        let tempObj = this.state.chartData;
        let lineObj = this.state.lineData;

        for (let i = 0; i < dateLabels.length; i++) {
            tempObj[0]["data"][i] = {
                "x": dateLabels[i],
                "y": Math.floor(Math.random() * Math.floor(150)),
                "label": dateLabels[i] + '${d.y}`'
            };

            tempObj[1]["data"][i] = {
                "x": dateLabels[i],
                "y": Math.floor(Math.random() * Math.floor(300)),
                "label": dateLabels[i] + '${d.y}`'
            };

            // Get data for each day
            lineObj[0]["data"][dateLabels[i]] = Math.floor(Math.random() * Math.floor(150));
            lineObj[1]["data"][dateLabels[i]] = Math.floor(Math.random() * Math.floor(300));
        }

        console.log(lineObj);
        console.log(tempObj);

        if (compareLabels != null) {
            tempObj[2] = {
                "id": "Compare Call",
                "data": [
                    {
                        "x": "",
                        "y": 0
                    }
                ]
            };
            tempObj[3] = {
                "id": "Compare 5+ TOS",
                "data": [
                    {
                        "x": "",
                        "y": 0
                    }
                ]
            };

            lineObj[2] = {
                "name": "Compare Call",
                "data": {}
            };
            lineObj[3] = {
                "name": "Compare 5+ TOS",
                "data": {}
            };

            for (let i = 0; i < dateLabels.length; i++) {
                tempObj[2]["data"][i] = {
                    "x": dateLabels[i],
                    "y": compareLabels[i] == null ? 0 : Math.floor(Math.random() * Math.floor(150)),
                    "label": compareLabels[i] == null ? "Out of Range" : compareLabels[i]
                };

                tempObj[3]["data"][i] = {
                    "x": dateLabels[i],
                    "y": compareLabels[i] == null ? 0 : Math.floor(Math.random() * Math.floor(300)),
                    "label": compareLabels[i] == null ? "Out of Range" : compareLabels[i]
                };

                // Get data for each day
                lineObj[2]["data"][dateLabels[i]] = Math.floor(Math.random() * Math.floor(150));
                lineObj[3]["data"][dateLabels[i]] = Math.floor(Math.random() * Math.floor(300));
            }
        }

        // Set state with fresh data
        this.state = {
            chartData: tempObj,
            lineData: lineObj,
        }
    };

    render() {
        this.calculateDateRange();
        let nivoData = this.state.chartData;
        let propsColor = this.props.color;
        let title = this.props.title;
        let lineData = this.state.lineData;

        return (
            <Card className="nivoCard">
                <CardHeader color={propsColor}>
                    <h4 className="nivoCardTitle">{title}</h4>
                </CardHeader>
                <CardBody>
                    <LineChart
                        data={lineData}
                        xtitle='Date'
                        ytitle='Conversions'
                        label='Value'
                        colors={['#4EAF4A', '#377EB8', '#5E35B1', '#FF7F02']}
                        download='boom'
                    />
                    <div className="nivoGraph">
                        <ResponsiveLine
                            stacked={false}
                            data={nivoData}
                            margin={{
                                "top": 50,
                                "right": 110,
                                "bottom": 50,
                                "left": 60
                            }}
                            xScale={{
                                "type": "point"
                            }}
                            yScale={{
                                "type": "linear",
                                "min": "auto",
                                "max": "auto"
                            }}
                            minY="auto"
                            maxY="auto"
                            axisBottom={{
                                "orient": "bottom",
                                "tickSize": 5,
                                "tickPadding": 5,
                                "tickRotation": 0,
                                "legendPosition": "center"
                            }}
                            axisLeft={{
                                "orient": "left",
                                "tickSize": 5,
                                "tickPadding": 5,
                                "tickRotation": 0,
                                "legendOffset": -40,
                                "legendPosition": "center"
                            }}
                            colors={['#4EAF4A', '#FF7F02', '#377EB8', '#5E35B1']}
                            dotSize={10}
                            dotColor="inherit:darker(0.3)"
                            dotBorderWidth={2}
                            dotBorderColor="#ffffff"
                            enableDotLabel={true}
                            dotLabel="y"
                            dotLabelYOffset={-12}
                            enableArea={false}
                            animate={true}
                            motionStiffness={90}
                            motionDamping={15}
                            legends={[
                                {
                                    "anchor": "bottom-right",
                                    "direction": "column",
                                    "justify": false,
                                    "translateX": 100,
                                    "translateY": 0,
                                    "itemsSpacing": 0,
                                    "itemDirection": "left-to-right",
                                    "itemWidth": 80,
                                    "itemHeight": 20,
                                    "itemOpacity": 0.75,
                                    "symbolSize": 12,
                                    "symbolShape": "triangle",
                                    "symbolBorderColor": "rgba(0, 0, 0, .5)",
                                    "effects": [
                                        {
                                            "on": "hover",
                                            "style": {
                                                "itemBackground": "rgba(0, 0, 0, .03)",
                                                "itemOpacity": 1
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                    </div>
                </CardBody>
            </Card>
        );
    }
}