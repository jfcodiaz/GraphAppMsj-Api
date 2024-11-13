const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const path = require('path');

const types = loadFilesSync(path.join(__dirname, './**/*.type.js'));
const mutations = loadFilesSync(path.join(__dirname, './**/*.mutation.js'));

const typeDefs = [
  ...mutations,
  ...types,
  loadFilesSync(path.join(__dirname, './**/*.query.js')),
];

const resolvers = loadFilesSync(path.join(__dirname, './**/*.resolver.js'));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = schema;
