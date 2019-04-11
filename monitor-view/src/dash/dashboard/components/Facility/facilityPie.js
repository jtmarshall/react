import React, {Component} from "react";
import {ResponsivePie} from 'nivo';
import CardHeader from "../../tools/Card/CardHeader";
import CardBody from "../../tools/Card/CardBody";
import Card from "../../tools/Card/Card";

export default class FacilityPie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // chartData: [
            //     {
            //         "id": "Referring",
            //         "label": "Referring",
            //         "value": 425,
            //         "color": '#4EAF4A'
            //     },
            //     {
            //         "id": "Direct",
            //         "label": "Direct",
            //         "value": 180,
            //         "color": '#377EB8'
            //     },
            //     {
            //         "id": "Ad-Video",
            //         "label": "Ad-Video",
            //         "value": 539,
            //         "color": '#FF6F00'
            //     },
            //     {
            //         "id": "Email",
            //         "label": "Email",
            //         "value": 292,
            //         "color": '#AF1B3F'
            //     },
            //     {
            //         "id": "Organic",
            //         "label": "Organic",
            //         "value": 317,
            //         "color": '#963484'
            //     },
            //     {
            //         "id": "Offline",
            //         "label": "Offline",
            //         "value": 191,
            //         "color": '#FFD600'
            //     },
            //     {
            //         "id": "CPC",
            //         "label": "CPC",
            //         "value": 247,
            //         "color": '#80A1C1'
            //     }
            // ]
            chartData: [
                {
                    "id": "Referring",
                    "label": "Referring",
                    "value": 425,
                    "color": '#365CA0',
                    "percent": 0
                },
                {
                    "id": "Direct",
                    "label": "Direct",
                    "value": 180,
                    "color": '#33C3E9',
                    "percent": 0
                },
                {
                    "id": "Ad-Video",
                    "label": "Ad-Video",
                    "value": 539,
                    "color": '#33BFBB',
                    "percent": 0
                },
                {
                    "id": "Organic",
                    "label": "Organic",
                    "value": 292,
                    "color": '#A3D50C',
                    "percent": 0
                },
                {
                    "id": "Email",
                    "label": "Email",
                    "value": 317,
                    "color": '#FFD600',
                    "percent": 0
                },
                {
                    "id": "Offline",
                    "label": "Offline",
                    "value": 191,
                    "color": '#E53947',
                    "percent": 0
                },
                {
                    "id": "CPC",
                    "label": "CPC",
                    "value": 247,
                    "color": '#9E5E8C',
                    "percent": 0
                }
            ]
        };

        this.loadData();
    }

    loadData = () => {
        let tempChartData = this.state.chartData;
        let totalVal = 2191;

        for (let i = 0; i < tempChartData.length; i++) {
            tempChartData[i].percent = (tempChartData[i].value/totalVal * 100).toFixed(0);
        }

        console.log(tempChartData);

        this.setState({
            chartData: tempChartData,
        })
    };

    render() {
        let nivoData = this.state.chartData;
        let propsColor = this.props.color;
        let title = this.props.title;

        return (
            <Card className="nivoCard" style={{width: '30%'}}>
                <CardHeader className="facilityCardHeader" color={propsColor}>
                    <h4 className="nivoCardTitle">{title}</h4>
                </CardHeader>
                <CardBody>
                    <div className="nivoGraph">
                        <ResponsivePie
                            data={this.state.chartData}
                            margin={{
                                "top": 30,
                                "right": 20,
                                "bottom": 30,
                                "left": 20
                            }}
                            innerRadius={0.5}
                            padAngle={0.7}
                            cornerRadius={3}
                            colorBy={function(e){return e.color}}
                            borderWidth={1}
                            borderColor="inherit:darker(0.2)"
                            enableRadialLabels={false}
                            radialLabelsSkipAngle={10}
                            radialLabelsTextXOffset={6}
                            radialLabelsTextColor="#333333"
                            radialLabelsLinkOffset={0}
                            radialLabelsLinkDiagonalLength={16}
                            radialLabelsLinkHorizontalLength={24}
                            radialLabelsLinkStrokeWidth={1}
                            radialLabelsLinkColor="inherit"
                            sliceLabel={function(e){return"".concat(e.id,"\n ").concat(e.percent, "% (").concat(e.value,")")}}
                            slicesLabelsSkipAngle={10}
                            slicesLabelsTextColor="#fff"
                            animate={true}
                            motionStiffness={90}
                            motionDamping={15}
                        />
                    </div>
                </CardBody>
            </Card>
        );
    }
}