const { ApolloServer } = require('apollo-server-lambda')
const { resolvers } = require('./resolvers')
const { schema } = require('./schema')

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  formatError: error => {
    return error
  },
  formatResponse: response => {
    return response
  },
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
})

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
})
