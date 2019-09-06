import React from 'react'
import {Link, Redirect} from 'react-router-dom'

import { useQuery } from '@apollo/react-hooks';
import { gql, HttpLink, InMemoryCache, ApolloClient } from 'apollo-boost';

import { Query } from "react-apollo";

import S3ImageUploader from '../ImageUploaders/S3imageUploader'
import S3ImgViewer from '../ImageUploaders/S3ImgViewer'

const Home = (props) => {
    

    const cache = new InMemoryCache();
    const link = new HttpLink({
      uri: 'https://nuhaprismadb-e9e96b51e5.herokuapp.com/nuha-graphql/dev',
    })
    const client = new ApolloClient({
      cache,
      link
    })   
    
    /*
    const GET_GREETING = gql`
                               query {
                                users   {
                                            name
                                            id
                                        }
                                    }
                            `;
    const CREATE_DEPARTMENT = gql`
           mutation CreateDepartment ($name : String!) {
                createDepartment(data: { name: $name }) {
                departmentID
                name
                    }
                    
}         
    `
    console.log(client.query({query:GET_GREETING}).then( (data) => {console.log(data.data.users)} ))                               
    console.log(client.mutate({mutation:CREATE_DEPARTMENT, variables :{ name : 'Doomsday3' }}).then( (data) => {console.log(data)}  ).catch( (err) => {console.log(err)}))
    <S3ImageUploader imageName = 'Welll Shit' />
    */
    return (
        <div>
           Home Page  
           
        </div>
    )
}

export default Home
