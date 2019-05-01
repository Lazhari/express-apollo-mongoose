const { gql } = require('apollo-server-express');

const user = gql`
  type User {
    id: ID!
    userName: String
    email: String
  }
  extend type Query {
    getUsers: [User]
  }

  extend type Mutation {
    addUser(userName: String!, email: String!): User
  }
`;

module.exports = user;
