const { ApolloServer } = require('apollo-server-express');
const schema = require('../graphql');
const { get } = require('mongoose');
const server = new ApolloServer({ schema });

module.exports = {
    init: async(app) => {
        return server.start().then(() => {
            server.applyMiddleware({ app });
            console.log('Apollo Server is running');
        });
    },
    getServer: () => server
};