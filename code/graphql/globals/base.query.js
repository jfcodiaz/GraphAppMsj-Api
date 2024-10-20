const { gql } = require('apollo-server-express');

module.exports = gql`
  
  directive @hidden on FIELD_DEFINITION

  type Query {
    "Empty query to extend"
    _empty: String @hidden
  }

  type Mutation {
    "Empty mutation to extend"
    _empty: String @hidden
  }

`;