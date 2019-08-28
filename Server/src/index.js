const { GraphQLServer } = require('graphql-yoga')
import Query from './Resolvers/Query'
import Mutation from './Resolvers/Mutation'
import Subscription from './Resolvers/Subscription'
import {Prisma} from '../Prisma/generated/prisma-client/index'

const typeDefs = `
  type Query {
    hello(name: String): String
  }
`

const resolvers = {
  Query,
  Mutation,
  Subscription
}

const server = new GraphQLServer({ 
    typeDefs : './src/schema.graphql',
    resolvers ,
    context:{
              Prisma
            }
    })


server.start(() => console.log(`Server is running at http://localhost:4000`))
