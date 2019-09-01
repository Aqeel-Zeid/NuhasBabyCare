import React from 'react'
import CreateEmployeeForm from '../../Forms/CreateEmployeeForm'
import {Container, Typography} from '@material-ui/core'

function CreateEmployee() {
    return (
        <div>
            <Typography variant = "h2">
                Create Employee
            </Typography>
            <CreateEmployeeForm />
        </div>
    )
}

export default CreateEmployee
