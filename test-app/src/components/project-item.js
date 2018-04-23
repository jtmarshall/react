import React, { Component } from 'react';

export default class ProjectItem extends Component {
    render(){
        return(
            <li className="Projects">
                <strong>{this.props.project.title}</strong>: {this.props.project.category}
            </li>
        )
    }
}