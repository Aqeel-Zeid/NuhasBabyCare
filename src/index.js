import React from 'react'
import ReactDOM from 'react-dom'
import '../src/styles/index.css'
import App from '../src/components/App'
import { ApolloProvider , withApollo } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { BrowserRouter as Router } from "react-router-dom";

import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://nuhaprismadb-e9e96b51e5.herokuapp.com/nuha-graphql/dev',
})

const client = new ApolloClient({
  cache,
  link
})


//Apollo Client
ReactDOM.render(
  <ApolloProvider client={client}>
      <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)