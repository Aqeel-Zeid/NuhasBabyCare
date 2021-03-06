import React from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom'
import { Container,GridList,GridListTile,GridListTileBar, } from '@material-ui/core';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      
    },
  }));


const StaffHome = (props) => {
    
    const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
                >
                <Tab label="Employee Management" {...a11yProps(0)} />
                <Tab label="Customer Management" {...a11yProps(1)} />
                <Tab label="Item Management" {...a11yProps(2)} />
                <Tab label="Leave Management" {...a11yProps(3)} />
                <Tab label="Card Management" {...a11yProps(4)} />
                <Tab label="Event Management" {...a11yProps(5)} />
                <Tab label="Photo Frame Management" {...a11yProps(6)} />
                <Tab label="Cake Management" {...a11yProps(7)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Link to="/staff/SearchEmployee">About</Link>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                
                </TabPanel>
                <TabPanel value={value} index={0} dir={theme.direction}>
                
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                Item Three
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                Item Three
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}

export default StaffHome
