const { gql } = require('apollo-server');

const usersTypeDefs = gql`
    type User {
        id: String!
        first_name: String!
        last_name: String!
        email: String!
        role: String!
        state: String
    }

    type Output {
        output: String!
    }

    input UserInput {
        email: String!
        first_name: String!
        last_name: String!
        password: String!
        role: String!
    }

    input UpdateUserInput {
        email: String!
        password: String
        role: String!
        state: String
    }

    extend type Query {
        userByEmail(email: String!): User
    }

    extend type Mutation {
        createUser(input: UserInput!): Output
        updateUser(input: UpdateUserInput!): Output
        deleteUser(email: String!): Output
    }
`;

module.exports = usersTypeDefs;