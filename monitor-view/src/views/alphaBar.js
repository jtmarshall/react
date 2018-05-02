import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Icon from 'material-ui/Icon';


const styles = {
    root: {
        width: "auto"
    },
};

class AlphaNav extends React.Component {
    state = {
        value: 'recents',
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
                <BottomNavigationAction label="" value="a" icon={<Icon>A</Icon>} />
                <BottomNavigationAction label="" value="b" icon={<Icon>B</Icon>} />
                <BottomNavigationAction label="" value="c" icon={<Icon>C</Icon>} />
                <BottomNavigationAction label="" value="d" icon={<Icon>D</Icon>} />
                <BottomNavigationAction label="" value="e" icon={<Icon>E</Icon>} />
                <BottomNavigationAction label="" value="f" icon={<Icon>F</Icon>} />
                <BottomNavigationAction label="" value="g" icon={<Icon>G</Icon>} />
                <BottomNavigationAction label="" value="h" icon={<Icon>H</Icon>} />
                <BottomNavigationAction label="" value="i" icon={<Icon>I</Icon>} />
                {/*<BottomNavigationAction label="" value="j" icon={<Icon>J</Icon>} />*/}
                <BottomNavigationAction label="" value="k" icon={<Icon>K</Icon>} />
                <BottomNavigationAction label="" value="l" icon={<Icon>L</Icon>} />
                <BottomNavigationAction label="" value="m" icon={<Icon>M</Icon>} />
                <BottomNavigationAction label="" value="n" icon={<Icon>N</Icon>} />
                <BottomNavigationAction label="" value="o" icon={<Icon>O</Icon>} />
                <BottomNavigationAction label="" value="p" icon={<Icon>P</Icon>} />
                {/*<BottomNavigationAction label="" value="q" icon={<Icon>Q</Icon>} />*/}
                <BottomNavigationAction label="" value="r" icon={<Icon>R</Icon>} />
                <BottomNavigationAction label="" value="s" icon={<Icon>S</Icon>} />
                <BottomNavigationAction label="" value="t" icon={<Icon>T</Icon>} />
                <BottomNavigationAction label="" value="u" icon={<Icon>U</Icon>} />
                <BottomNavigationAction label="" value="v" icon={<Icon>V</Icon>} />
                <BottomNavigationAction label="" value="w" icon={<Icon>W</Icon>} />
                {/*<BottomNavigationAction label="" value="x" icon={<Icon>X</Icon>} />*/}
                <BottomNavigationAction label="" value="y" icon={<Icon>Y</Icon>} />
                {/*<BottomNavigationAction label="" value="z" icon={<Icon>Z</Icon>} />*/}
            </BottomNavigation>
        );
    }
}

AlphaNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlphaNav);