import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';

import NuhaTypography from '../../../Assests/Logos/NuhaTypography.svg'


import SideDrawer from '../SideDrawer/SideDrawer'

const MyAppBar = () => {

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            backgroundColor: "Purple"
        },
        menuButton: {
           
            
        },
        title: {
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(2),
            flexGrow: 1
            

        },
    }));

    const classes = useStyles();


    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    function handleMenu(event) {
        setAnchorEl(event.currentTarget);
    }


    function handleClose() {
        setAnchorEl(null);
      }

    return (
        <div >
            <AppBar position="static" color="default" className={classes.root}>
                <Toolbar >
                    
                    <SideDrawer/>
                    
                    
                    
                   
                        <img src={NuhaTypography} className={classes.title} height= "50vh" width = "40vw" /> 
                    

                    {auth && (
                        <div >

                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={19} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>

                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                                alignSelf="flex-End"
                            >
                                <AccountCircle />
                            </IconButton>
                            
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                        
                    )}   
                       
                </Toolbar>
               
            </AppBar>
            
        </div>
    )
}

export default MyAppBar
