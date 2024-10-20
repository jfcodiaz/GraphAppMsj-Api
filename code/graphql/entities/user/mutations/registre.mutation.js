const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Mutation {
    register(username: String!): User
  }
`;