import {ApolloServer} from 'apollo-server-express'
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core'
import http from 'http'
import {Express} from 'express'
import {typeDefs} from './typedefs'
import {resolvers} from './resolvers'

export const initApolloServer = async (
  httpServer: http.Server,
  app: Express
) => {
  const apolloServerInstance = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({httpServer}),
      ApolloServerPluginLandingPageLocalDefault({embed: true}),
    ],
  })

  await apolloServerInstance.start()
  apolloServerInstance.applyMiddleware({app})

  return apolloServerInstance
}
