import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';




const styles = theme => ({
    root: {
        width: "100%",
        background: " #00ffff",
        // background: "#66bb6a",
        height: "60px",
        color: "blue",
    },
    icon: {
        color: "blue",

    }
});



class BottomNav extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.bottomNav}
                classes={{ root: classes.root }}
            >

    
    
                <BottomNavigationAction classes={{ root: classes.icon }} label="Github" icon={<RestoreIcon />} onClick={() => {
                    window.open("https://github.com/lzvalentin/project-3", '_blank');
                }}  />
               
                <BottomNavigationAction classes={{ root: classes.icon }} label="Contact Us" icon={<LocationOnIcon />} onClick={() => { window.location = "/contact-us"; }} />
               
            </BottomNavigation>

        );
    }
}

BottomNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);