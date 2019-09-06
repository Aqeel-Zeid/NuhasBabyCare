import React from 'react'
import FormStaffLogin from '../../Forms/FormStaffLogin'
import { Grid, Paper, Container, TextField , Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

const StaffHome = () => {
    return (

        <Container maxWidth="md" style={{ backgroundColor: '#cfe8fc'}}>
            <Typography 
                color="textSecondary" 
                variant="h2"
                 style = {{marginBottom : '4vh'}}
                 >
                Login
            </Typography>
            <br/>
            <container maxWidth="sm" >
                <TextField
                    id="outlined-full-width"
                    label="Work Email"
                    style={{ margin: 8 }}
                    placeholder="Placeholder"
                    helperText="Please Enter Your Work Email!"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    type = "password" 
                    id="outlined-full-width"
                    label="Password"
                    style={{ margin: 8 }}
                    placeholder="Placeholder"
                    helperText=""
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="outlined"  fullWidth style = {{margin : '8px'}}>
                    Login
                </Button>
            </container>
        </Container>

    )
}

export default StaffHome
