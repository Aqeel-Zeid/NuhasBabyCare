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
import {Typography} from '@material-ui/core'
import SideDrawerLink from './SideDrawerLink'
import SideDrawerMyOrders from './SideDrawerMyOrders'
import useGlobal from 'reactn'
import {Link} from 'react-router-dom'

const useStyles = makeStyles( theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

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
              <ListItem>
                <Typography variant = "body1">
                    Employee Management
                </Typography>
              </ListItem>
            <ListItem>
                <ListItemText>
                    <Link to =  "/staff/CreateEmployee">
                        Add Employee
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link to =  "/staff/SearchEmployees">
                        Search Employee
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link>
                        Report
                    </Link>
                </ListItemText>
            </ListItem>
          </List>

          <Divider />
          <List>
            <ListItem>
                <Typography variant = "body1">
                    Customer Management
                </Typography>
              </ListItem>
            <ListItem>
                <ListItemText>
                    <Link to =  "/staff/CreateCustomer">
                        Add Customer
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link to =  "/staff/SearchCustomer">
                        Search Customer
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link to =  "/staff/UpdateLoyalityPoints">
                        Update Loyality Points
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link>
                        Report
                    </Link>
                </ListItemText>
            </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem>
                <Typography variant = "body1">
                    Item Management
                </Typography>
              </ListItem>
            <ListItem>
                <ListItemText>
                    <Link to =  "/staff/CreateItem">
                        Add Item
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link to =  "/staff/SearchItem">
                        Search Item
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link>
                        Report
                    </Link>
                </ListItemText>
            </ListItem>
          </List>

          <Divider />
          <List>
            <ListItem>
                <Typography variant = "body1">
                    Leave Management
                </Typography>
              </ListItem>
            <ListItem>
                <ListItemText>
                    <Link to =  "/staff/SearchEmployees">
                        Add Leave
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link to =  "/staff/SearchLeaveDay">
                        Search Leave
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link>
                        Report
                    </Link>
                </ListItemText>
            </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem>
                    <Typography variant = "body1">
                        Card Management
                    </Typography>
              </ListItem>
            <ListItem>
                <ListItemText>
                    <Link to =  "/staff/CreateCardTemplate">
                        Add Card
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link to =  "/staff/StaffSearchCard">
                        Search Card
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link>
                        Report
                    </Link>
                </ListItemText>
            </ListItem>
          </List>

          <Divider />
          <List>
                <ListItem>
                    <Typography variant = "body1">
                        Event Management
                    </Typography>
                </ListItem>
            <ListItem>
                <ListItemText>
                    <Link to =  "/staff/CreateEvent">
                        Add Event
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link to =  "/staff/SearchEventPackages">
                        Search Event
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link>
                        Report
                    </Link>
                </ListItemText>
            </ListItem>
          </List>
        
          <Divider />
          <List>
              <ListItem>
                    <Typography variant = "body1">
                        Photo Frame Management
                    </Typography>
              </ListItem>
            <ListItem>
                <ListItemText>
                    <Link to =  "/staff/CreatePhotoFrame">
                        Add Photo Frame
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link to =  "/staff/SearchPhotoFrame">
                        Search Photo Frame
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link>
                        Report
                    </Link>
                </ListItemText>
            </ListItem>
          </List>

          <Divider />
          <Divider />
          <List>
              <ListItem>
                    <Typography variant = "body1">
                        Cake Management
                    </Typography>
              </ListItem>
            <ListItem>
                <ListItemText>
                    <Link>
                        Add Card
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link>
                        Search Card
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link>
                        Report
                    </Link>
                </ListItemText>
            </ListItem>
          </List>

          <Divider />

          
        </div>
      );
    
     
    
   

    
    return (
        <>       
                <IconButton 
                    edge="start"  
                    color="inherit" 
                    aria-label="menu" 
                    onClick={toggleDrawer('left', true)} 
                   
                    >
                    <MenuIcon fontSize="64"/>
                </IconButton>
                 <Drawer anchor="left" open={state.left} >
                    {sideList('left')}
                 </Drawer>
        </>
    )


}
