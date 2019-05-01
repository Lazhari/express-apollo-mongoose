const { gql } = require('apollo-server-express');

const book = gql`
  type Book {
    id: ID!
    title: String
    author: String
    summary: String
  }
  extend type Query {
    getBooks: [Book]
  }

  extend type Mutation {
    addBook(title: String!, author: String!, summary: String!): Book
  }
`;

module.exports = book;
