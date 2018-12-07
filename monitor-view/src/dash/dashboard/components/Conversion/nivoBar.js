import React, {Component} from "react";
import {ResponsiveBar} from 'nivo';
import toolbox from "../../tools/toolbox";
import CardHeader from "../../tools/Card/CardHeader";
import CardBody from "../../tools/Card/CardBody";
import Card from "../../tools/Card/Card";

export default class NivoBar extends Component {
    constructor(props) {
        super(props);
        //let today = new Date();

        // Retrieve local store
        let yakPak = toolbox.retrievePak();
        let toDate = new Date(yakPak.DateFrame.To);

        let tempLabels = [];

        // Generate date labels starting with 'toDate' and iterating back through length of data
        for (let i = 0; i < this.props.chartCallData.length; i++) {
            // parse date for how many days prior
            let temp = new Date();
            temp.setDate(toDate.getDate() - i);
            tempLabels.unshift((toDate.getUTCMonth() + 1) + "/" + temp.getDate());
        }

        this.state = {
            chartData: [
                {
                    "day": "9/1",
                    "Call": 33,
                    "5+ TOS": 33,
                },
                {
                    "day": "9/2",
                    "Call": 15,
                    "5+ TOS": 9,
                },
                {
                    "day": "9/3",
                    "Call": 33,
                    "5+ TOS": 59,
                },
                {
                    "day": "9/4",
                    "Call": 84,
                    "5+ TOS": 188,
                },
                {
                    "day": "9/5",
                    "Call": 81,
                    "5+ TOS": 149,
                },
                {
                    "day": "9/6",
                    "Call": 178,
                    "5+ TOS": 29,
                },
                {
                    "day": "9/7",
                    "Call": 53,
                    "5+ TOS": 55,
                }
            ]
        }
    }

    render() {
        let nivoData = this.state.chartData;
        let propsColor = this.props.color;
        let title = this.props.title;

        return (
            <Card className="nivoCard">
                <CardHeader color={propsColor}>
                    <h4 className="nivoCardTitle">{title}</h4>
                </CardHeader>
                <CardBody>
                    <div className="nivoGraph">
                        <ResponsiveBar
                            data={nivoData}
                            keys={[
                                "Call",
                                "5+ TOS"
                            ]}
                            indexBy="day"
                            margin={{
                                "top": 50,
                                "right": 130,
                                "bottom": 50,
                                "left": 60
                            }}
                            padding={0.3}
                            groupMode="grouped"
                            colors={['#4EAF4A','#FF7F02', '#377EB8']}
                            colorBy="id"
                            borderColor="inherit:darker(1.6)"
                            axisBottom={{
                                "orient": "bottom",
                                "tickSize": 5,
                                "tickPadding": 5,
                                "tickRotation": 0,
                                "legendPosition": "center",
                                "legendOffset": 36
                            }}
                            axisLeft={{
                                "orient": "left",
                                "tickSize": 5,
                                "tickPadding": 5,
                                "tickRotation": 0,
                                "legend": "food",
                                "legendPosition": "center",
                                "legendOffset": -40
                            }}
                            labelSkipWidth={12}
                            labelSkipHeight={12}
                            labelTextColor="inherit:darker(1.6)"
                            animate={true}
                            motionStiffness={90}
                            motionDamping={15}
                            legends={[
                                {
                                    "anchor": "bottom-right",
                                    "direction": "column",
                                    "translateX": 100,
                                    "itemWidth": 80,
                                    "itemHeight": 20,
                                    "symbolSize": 12,
                                    "symbolShape": "circle"
                                }
                            ]}
                        />
                    </div>
                </CardBody>
            </Card>
        );
    }
}