import React, {Component} from "react";
import {ResponsivePie} from 'nivo';
import CardBody from "../../tools/Card/CardBody";
import Card from "../../tools/Card/Card";
// Import accent color from css file
import {fAccent} from './facility.css';

export default class FacilityAdmitsGoal extends Component {

    constructor(props) {
        super(props);

        let facilityAdmitGoal = 210;
        let facilityAdmitVal = 150;
        let facilityAdmitPercent = (facilityAdmitVal/facilityAdmitGoal * 100).toFixed(1);

        this.state = {
            admitGoal: facilityAdmitGoal,
            admitVal: facilityAdmitVal,
            chartData: [
                {
                    "id": "Admits",
                    "label": "Admits",
                    "value": facilityAdmitVal,
                    "color": fAccent,
                    "percent": "".concat(facilityAdmitPercent,"%")
                },
                {
                    "id": "",
                    "label": "",
                    "value": facilityAdmitGoal - facilityAdmitVal,
                    "color": 'none',
                    "percent": ""
                },
            ]
        }
    }

    render() {
        let nivoData = this.state.chartData;
        let title = this.props.title;

        return (
            <Card className="admitsCard" style={{width: '30%', margin: 'auto', padding: '0px', background: 'none', boxShadow: 'none'}}>
                <CardBody>
                    <h4 id="admitsGoalTitle" className="nivoCardTitle"><strong>{title}</strong></h4>
                    <h4 className="nivoCardTitle" style={{color: 'black'}}>{this.state.admitVal} / {this.state.admitGoal}</h4>
                    <div className="admitsPieGraph">
                        <ResponsivePie
                            data={nivoData}
                            margin={{
                                "top": 0,
                                "right": 0,
                                "bottom": 0,
                                "left": 0
                            }}
                            innerRadius={0}
                            padAngle={0.7}
                            cornerRadius={3}
                            colorBy={function(e){return e.color}}
                            borderWidth={0}
                            borderColor="inherit:darker(0.2)"
                            enableRadialLabels={false}
                            sliceLabel={function(e){return e.percent}}
                            slicesLabelsSkipAngle={10}
                            slicesLabelsTextColor="#fff"
                            animate={false}
                            motionStiffness={90}
                            motionDamping={15}
                        />
                    </div>
                </CardBody>
            </Card>
        );
    }
}