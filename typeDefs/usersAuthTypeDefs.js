const { gql } = require('apollo-server');

const usersAuthTypeDefs = gql`
    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    input CredentialsInput {
        email: String!
        password: String!
    }

    extend type Mutation {
        authenticate(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
    }
`;

module.exports = usersAuthTypeDefs;