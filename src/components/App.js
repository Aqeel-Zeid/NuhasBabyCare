import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import logo from '../logo.svg'
import '../styles/App.css'

import Routes from './Routes'
import MyAppBar from './NavigationComponents/AppBar/MyAppBar'

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
