const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const path = require('path');

const typeDefs = loadFilesSync(path.join(__dirname, './**/*.query.js'));
const resolvers = loadFilesSync(path.join(__dirname, './**/*.resolver.js'));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = schema;
