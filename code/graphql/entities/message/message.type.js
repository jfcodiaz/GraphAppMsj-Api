const { gql } = require('apollo-server-express');

module.exports = gql`
    type Message {
        id: ID!
        text: String!
        userId: String!
        createdAt: String!
        user: User!
    }

    type Subscription {
        messageCreated: Message
        postCreated: String
    }
`;