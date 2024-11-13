const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Mutation {
    message(userId: String!, text: String!): Message
  }
`;
