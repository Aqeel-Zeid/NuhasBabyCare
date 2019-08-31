import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import FormStaffLogin from './'


const StaffHome = () => {
    return (
        <div>
             <Grid container spacing = {2} justify = "center">
                 <Grid item xs = {6}  >
                    <Paper elevation = {2} rounded >
                        Hello World
                    </Paper>
                 </Grid>
             </Grid>
        </div>
    )
}

export default StaffHome
