const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Mutation {
    join(username: String!): User
  }
`;