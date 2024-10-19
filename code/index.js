const dotenv = require('dotenv');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const dotenvExpand = require('dotenv-expand');

dotenv.config();
const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

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
    await Promise.all([
        mongoose.connect(process.env.MONGO_URI),
        server.start()
    ]);
    server.applyMiddleware({ app });
    app.listen({ port }, () => {
        console.log(`🚀 Express:       http://localhost:${port}`);
        console.log(`🚀 Apollo Server: http://localhost:${port}${server.graphqlPath}`)
    });
  }

  startServer();
