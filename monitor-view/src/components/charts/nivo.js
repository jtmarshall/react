import { Bar} from 'nivo';
import React, {Component} from "react";

export class NivoChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nData: [
                {
                    "country": "AD",
                    "hot dog": 151,
                    "hot dogColor": "hsl(106, 70%, 50%)",
                    "burger": 56,
                    "burgerColor": "hsl(344, 70%, 50%)",
                    "sandwich": 3,
                    "sandwichColor": "hsl(304, 70%, 50%)",
                    "kebab": 155,
                    "kebabColor": "hsl(122, 70%, 50%)",
                    "fries": 117,
                    "friesColor": "hsl(265, 70%, 50%)",
                    "donut": 95,
                    "donutColor": "hsl(6, 70%, 50%)"
                },
                {
                    "country": "AE",
                    "hot dog": 197,
                    "hot dogColor": "hsl(17, 70%, 50%)",
                    "burger": 58,
                    "burgerColor": "hsl(321, 70%, 50%)",
                    "sandwich": 102,
                    "sandwichColor": "hsl(342, 70%, 50%)",
                    "kebab": 19,
                    "kebabColor": "hsl(199, 70%, 50%)",
                    "fries": 200,
                    "friesColor": "hsl(39, 70%, 50%)",
                    "donut": 11,
                    "donutColor": "hsl(47, 70%, 50%)"
                },
                {
                    "country": "AF",
                    "hot dog": 88,
                    "hot dogColor": "hsl(54, 70%, 50%)",
                    "burger": 46,
                    "burgerColor": "hsl(98, 70%, 50%)",
                    "sandwich": 176,
                    "sandwichColor": "hsl(198, 70%, 50%)",
                    "kebab": 194,
                    "kebabColor": "hsl(296, 70%, 50%)",
                    "fries": 21,
                    "friesColor": "hsl(168, 70%, 50%)",
                    "donut": 31,
                    "donutColor": "hsl(75, 70%, 50%)"
                },
                {
                    "country": "AG",
                    "hot dog": 46,
                    "hot dogColor": "hsl(357, 70%, 50%)",
                    "burger": 148,
                    "burgerColor": "hsl(331, 70%, 50%)",
                    "sandwich": 138,
                    "sandwichColor": "hsl(219, 70%, 50%)",
                    "kebab": 108,
                    "kebabColor": "hsl(171, 70%, 50%)",
                    "fries": 129,
                    "friesColor": "hsl(318, 70%, 50%)",
                    "donut": 76,
                    "donutColor": "hsl(108, 70%, 50%)"
                },
                {
                    "country": "AI",
                    "hot dog": 163,
                    "hot dogColor": "hsl(124, 70%, 50%)",
                    "burger": 99,
                    "burgerColor": "hsl(108, 70%, 50%)",
                    "sandwich": 161,
                    "sandwichColor": "hsl(7, 70%, 50%)",
                    "kebab": 194,
                    "kebabColor": "hsl(119, 70%, 50%)",
                    "fries": 11,
                    "friesColor": "hsl(82, 70%, 50%)",
                    "donut": 101,
                    "donutColor": "hsl(134, 70%, 50%)"
                },
                {
                    "country": "AL",
                    "hot dog": 16,
                    "hot dogColor": "hsl(242, 70%, 50%)",
                    "burger": 175,
                    "burgerColor": "hsl(255, 70%, 50%)",
                    "sandwich": 169,
                    "sandwichColor": "hsl(210, 70%, 50%)",
                    "kebab": 33,
                    "kebabColor": "hsl(44, 70%, 50%)",
                    "fries": 181,
                    "friesColor": "hsl(252, 70%, 50%)",
                    "donut": 88,
                    "donutColor": "hsl(3, 70%, 50%)"
                },
                {
                    "country": "AM",
                    "hot dog": 176,
                    "hot dogColor": "hsl(109, 70%, 50%)",
                    "burger": 78,
                    "burgerColor": "hsl(345, 70%, 50%)",
                    "sandwich": 200,
                    "sandwichColor": "hsl(157, 70%, 50%)",
                    "kebab": 165,
                    "kebabColor": "hsl(359, 70%, 50%)",
                    "fries": 84,
                    "friesColor": "hsl(309, 70%, 50%)",
                    "donut": 98,
                    "donutColor": "hsl(110, 70%, 50%)"
                }
            ],
            margin: {
                "top": 50,
                "right": 130,
                "bottom": 50,
                "left": 60
            }
        };
    }

    render() {
        return (
            <Bar
                width={420}
                height={300}
                margin={this.state.margin}
                data={this.state.nData}
                keys={[
                    "hot dog",
                    "burger",
                    "sandwich",
                    "kebab",
                    "fries",
                    "donut"
                ]}
                indexBy="country"
                padding={0.3}
                colors="nivo"
                colorBy="id"
                defs={[
                    {
                        "id": "dots",
                        "type": "patternDots",
                        "background": "inherit",
                        "color": "#38bcb2",
                        "size": 4,
                        "padding": 1,
                        "stagger": true
                    },
                    {
                        "id": "lines",
                        "type": "patternLines",
                        "background": "inherit",
                        "color": "#eed312",
                        "rotation": -45,
                        "lineWidth": 6,
                        "spacing": 10
                    }
                ]}
                fill={[
                    {
                        "match": {
                            "id": "fries"
                        },
                        "id": "dots"
                    },
                    {
                        "match": {
                            "id": "sandwich"
                        },
                        "id": "lines"
                    }
                ]}
                borderColor="inherit:darker(1.6)"
                axisBottom={{
                    "orient": "bottom",
                    "tickSize": 5,
                    "tickPadding": 5,
                    "tickRotation": 0,
                    "legend": "country",
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
                        "dataFrom": "keys",
                        "anchor": "bottom-right",
                        "direction": "column",
                        "translateX": 120,
                        "itemWidth": 100,
                        "itemHeight": 20,
                        "itemsSpacing": 2,
                        "symbolSize": 20
                    }
                ]}
            />
        );
    }
}

export default NivoChart;

