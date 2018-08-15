import React, {Component} from "react";
import ReactChart from './charts/reactChart';

const cardStyle = {
    border: '3px solid #00C853'
};

const errStyle = {
    border: '3px solid #D50000'
};

const ulStyle = {
    textAlign: "left",
    listStyleType: "none",
    margin: 0,
    padding: "0 0 0 8px"
};

export class DomainCard extends Component {
    render() {
        return (
            <div className="domainCard card" style={this.props.statusCode > 399 ? errStyle : cardStyle}>
                <div className="header">
                    <h4 className="title">
                        <a href={"http://" + this.props.domain} target={"_blank"}>
                            {this.props.statusInfo.FacilityName !== "" ?
                                this.props.statusInfo.FacilityName : this.props.domain}
                        </a>
                    </h4>
                </div>
                <div className={
                    "content" +
                    (this.props.ctAllIcons ? " all-icons" : "") +
                    (this.props.ctTableFullWidth ? " table-full-width" : "") +
                    (this.props.ctTableResponsive ? " table-responsive" : "") +
                    (this.props.ctTableUpgrade ? " table-upgrade" : "")
                }
                >

                    <ReactChart chartData={this.props.statusInfo.GraphDataOutage} chartData404={this.props.statusInfo.GraphData404}/>

                    <div className="footer">
                        {this.props.stats != null ? <hr/> : ""}
                        <div className="stats">
                            <ul style={ulStyle}>
                                <li hidden={this.props.statusCode === 200}>
                                    <b>Status:</b> {this.props.statusInfo.Status}
                                </li>
                                <li>
                                    <b>Response Time:</b> {this.props.statusInfo.AvgResponse.toFixed(2)}<i>ms</i>
                                </li>
                                <li>
                                    <b>
                                        <span style={{color: "#e83e8c"}}>Outages: </span>
                                    </b>
                                    {this.props.statusInfo.Outages}
                                </li>
                                <li>
                                    <b>
                                        <span style={{color: "#ff6700"}}>404: </span>
                                    </b>
                                    {this.props.statusInfo.Errors}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DomainCard;