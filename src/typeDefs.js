const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    info: String!
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!): User!
  }
`;
