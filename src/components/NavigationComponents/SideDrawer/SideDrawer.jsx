import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';

import SideDrawerLink from './SideDrawerLink'
import SideDrawerMyOrders from './SideDrawerMyOrders'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <List>
            <SideDrawerLink text = "Home" icon = { <InboxIcon />} address = "Home"/>
            <SideDrawerLink text = "CakeShop" address = "CakeShop"/>
            <SideDrawerLink text = "Photography Service" address = "PhotoGraphy"/>
          </List>
          <Divider />
          <List>
          <ListItem>My Orders</ListItem>
          <SideDrawerMyOrders/>
          </List>
        </div>
      );
    
     
    
   

    
    return (
        <>       
                <IconButton edge="start"  color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)} >
                    <MenuIcon fontSize="64"/>
                </IconButton>
                 <Drawer anchor="left" open={state.left} >
                    {sideList('left')}
                 </Drawer>
        </>
    )


}
