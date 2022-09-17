import http from 'http'
import {initApolloServer} from './graphql/apolloServer'
import app from './app/app'

const PORT: number = 4000

const startServer = async () => {
  const httpServer = http.createServer(app)
  const apolloServer = await initApolloServer(httpServer, app)

  await new Promise<void>((resolve) => httpServer.listen({port: PORT}, resolve))
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
  )
}

startServer()
