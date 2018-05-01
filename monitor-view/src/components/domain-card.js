import React, {Component} from "react";

const cardStyle = {
    border: '3px solid #00C853'
};

const errStyle = {
    border: '3px solid #D50000'
};

const ulStyle = {
    textAlign: "left"
};

export class DomainCard extends Component {
    render() {
        return (
            <div className="domainCard card" style={this.props.statusCode > 400 ? errStyle : cardStyle}>
                <div className="header">
                    <h4 className="title">{this.props.statusInfo.FacilityName}</h4>
                    {/*<p className="category">{this.props.cardText}</p>*/}
                </div>
                <div className={
                        "content" +
                        (this.props.ctAllIcons ? " all-icons" : "") +
                        (this.props.ctTableFullWidth ? " table-full-width" : "") +
                        (this.props.ctTableResponsive ? " table-responsive" : "") +
                        (this.props.ctTableUpgrade ? " table-upgrade" : "")
                    }
                >
                    <div className="ct-chart">

                    </div>

                    <div className="footer">
                        {this.props.stats != null ? <hr/> : ""}
                        <div className="stats">
                            <ul style={ulStyle}>
                                <li hidden={this.props.statusCode == 200}>
                                    <b>Status:</b> {this.props.statusInfo.Status}
                                </li>
                                <li>
                                    <b>Avg Resp:</b> {this.props.statusInfo.AvgResponse}<i>ms</i>
                                </li>
                                <li>
                                    <b>Outages:</b> {this.props.statusInfo.Outages}
                                </li>
                                <li>
                                    <b>Errors:</b> {this.props.statusInfo.Errors}
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