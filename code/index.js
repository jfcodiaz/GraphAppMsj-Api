const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();
const port = 3000;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
};

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
    app.listen({ port }, () => {
        console.log(`xxExample app listening at http://localhost:${port}`);
        console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
    });
  }

  startServer();
