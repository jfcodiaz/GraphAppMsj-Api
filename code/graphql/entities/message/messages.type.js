const { gql } = require('apollo-server-express');

module.exports = gql`
    type Messages {
        data: [Message]
        total: Int
        page: Int
        totalPages: Int
        currentPage: Int
    }
`;