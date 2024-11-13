const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    messages(startDate: String, page: Int, limit: Int): Messages!
  }
`;
