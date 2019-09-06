import React, { Component } from 'react'
import { gql , ApolloClient } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Query } from 'react-apollo'
import logo from '../logo.svg'
import '../styles/App.css'



import Routes from './Routes'
import MyAppBar from './NavigationComponents/AppBar/MyAppBar'

import { useQuery } from '@apollo/react-hooks';



class App extends Component {

  render() {
    
    return (
      
        <div>
            <MyAppBar/>
            <Routes/>
        </div>
  
    )
  }
}


export default App
