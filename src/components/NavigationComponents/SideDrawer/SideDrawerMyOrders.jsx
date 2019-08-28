import React from 'react'



import SideDrawerLink from './SideDrawerLink'
import Badge from '@material-ui/core/Badge';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Avatar from '@material-ui/core/Avatar';




const SideDrawerMyOrders = () => {

    const MyOrders = ['OrderOne' , 'OrderTwo', 'Order3' ];

    return (
        <div>
                
            {
                MyOrders.map( (n) => {  return <SideDrawerLink text={n} adddress = "test" /> } )
            }
            
           
        </div>
    )
}

export default SideDrawerMyOrders
