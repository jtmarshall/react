import React, {Component} from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';

export class ReactChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Recent Performance",
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [2, 10, 5, 2, 20, 30, 45],
                }]
            }
        }
    }

    render() {
        return (
            <div className="reactchart">
                <Bar
                    data={this.state.chartData}
                    options={{
                    }}
                />
            </div>
        );
    }
}

export default ReactChart;