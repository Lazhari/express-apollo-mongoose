const express = require('express');
const { ApolloServer } = require('apollo-server-express');
require('./config/mongo-connector');

const { User, Book } = require('./models');

const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, err => {
  if (err) {
    console.error(`Something went wrong ${err.message}`);
  }
  console.log(`The magic happen at http://localhost:${4000}`);
});
