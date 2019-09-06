import React from 'react'
import {useEffect, useState} from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Container} from  '@material-ui/core'
import { gql, HttpLink, InMemoryCache, ApolloClient } from 'apollo-boost';
import { Query } from 'react-apollo';

function CreateEmployeeForm() {

    let p  = []
    const GET_POSITIONS = gql`
        query Positions
        (
            $name : String
        )
        {
                positions(
                    where:{
                        department:{
                        name :$name
                        }
                    })
                {
                    jobRole
                }
}
    `

    const [positions , setPositions] = useState([])
    const [departments , setDepartments] = useState('Management')
    const [udateUi , setUpdateUi ] = useEffect(false)
    
    
    useEffect(
        () => 
        {
            //console.log(`The Hook Ran`)
            //Creating Client
            const cache = new InMemoryCache();
            const link = new HttpLink({
            uri: 'https://nuhaprismadb-e9e96b51e5.herokuapp.com/nuha-graphql/dev',
            })
            const client = new ApolloClient({
                cache,
                link,
                connectToDevTools: true
            })

            client.query(
                {
                    query : GET_POSITIONS,
                    variables : 
                    {
                        name : departments
                    },

                }
            ).then(
                (data) => {
                    console.log(data)
                    setPositions(data.data.positions)
                    console.log(positions)
                    }
            )
            .catch(
                (err) => 
                {
                    console.log(err)
                }
            )

        },
        [updateUi]
    )
    
    
    return (
        <Container>
            <Formik
            initialValues = {{
                EmployeeName : '',
                Age : '',
                NicNumber : '',
                BankAccountNumber : '',
                Position : '',
                Department  : '',
                Address : '',
                PhoneNumber : '',
                WorkEmail : '',
                Password : '',


            }}
            validationSchema = { Yup.object().shape({

            })}
            onSubmit = {(fields) => 
                {
                    console.log(fields)
                }
                
            }
            render = {({errors, status , touched}) =>
            (
                <Form>
                    
                    <div className="form-group">
                        <label htmlFor="Department">Department</label>
                        <Field component="select" name="Department" class="form-control" >
                            <option value="Management" class="dropdown-item" >Management</option>
                            <option value="Bakery" class="dropdown-item" >Bakery</option>
                        </Field>
                    </div>

                    

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-2">Register</button>
                        <button type="reset" className="btn btn-secondary">Reset</button>
                    </div>
                </Form>
            )} 
            />
        </Container>
    )
}

export default CreateEmployeeForm
