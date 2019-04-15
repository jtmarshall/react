import React, {Component} from 'react';
import NivoPie from './nivoPie';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';


function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class ConversionSummary extends Component {

    render() {
        return (
            <div className="">
                <NivoPie/>
            </div>
        )
    }
}

export default ConversionSummary;