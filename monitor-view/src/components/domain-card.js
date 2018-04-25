import React, {Component} from "react";

const cardStyle = {
    border: '3px solid #00C853'
};

const errStyle = {
    width: '30%',
    height: '180px',
    margin: '10px',
    color: '#222',
    border: '3px solid #D50000'
};

export class DomainCard extends Component {
    render() {
        return (
            <div className="domainCard card" style={this.props.statusCode > 400 ? errStyle : cardStyle}>
                <div className="header">
                    <h4 className="title">{this.props.domain}</h4>
                    <p className="category">{this.props.cardText}</p>
                </div>
                <div
                    className={
                        "content" +
                        (this.props.ctAllIcons ? " all-icons" : "") +
                        (this.props.ctTableFullWidth ? " table-full-width" : "") +
                        (this.props.ctTableResponsive ? " table-responsive" : "") +
                        (this.props.ctTableUpgrade ? " table-upgrade" : "")
                    }
                >
                    {this.props.content}

                    <div className="footer">
                        {this.props.stats != null ? <hr/> : ""}
                        <div className="stats">
                            <i className={this.props.statsIcon}/> {this.props.stats}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DomainCard;