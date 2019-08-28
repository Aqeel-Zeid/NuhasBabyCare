import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

import {Link , Redirect} from 'react-router-dom'


export default (props) => {

  return (
    <>
     <Link to = {`/item/${props.address}`} style={{ textDecoration: 'none' ,  color: 'black'}}>
      <ListItem button key={props.text}  >
                
                <ListItemIcon>{props.icon}</ListItemIcon>
                <ListItemText primary={props.text} />
               
      </ListItem>
      </Link>
    </>
  )
}
