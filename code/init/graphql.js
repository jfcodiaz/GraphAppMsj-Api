const { port } = require('../config');
const { WebSocketServer } = require('ws');
const { useServer } = require('graphql-ws/lib/use/ws');
const { ApolloServer } = require('apollo-server-express');

const http = require('http');
const schema = require('../graphql');
const pubsub = require('./pubsub');

const apolloServer = new ApolloServer({
  schema,
  context: ({ req }) => {
    return { pubsub };
  },
  plugins: [
    {
      async serverWillStart() {
        return {
          async drainServer() {
            wsServer.close();
          },
        };
      },
    },
  ],
});

module.exports = {
  init: async (app) => {
    const httpServer = http.createServer(app);
    const wsServer = new WebSocketServer({
      server: httpServer,
      path: '/graphql',
    });

    useServer(
      {
        schema,
        context: () => {
          return { pubsub };
        }
      },
      wsServer
    );

    await apolloServer.start();
    apolloServer.applyMiddleware({ 
      app,
      cors: {
        origin: '*',
        credentials: true,
      },
    });

    return httpServer.listen(port);
  },
  getServer: () => apolloServer,
};
