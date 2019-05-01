const express = require('express');
const { ApolloServer } = require('apollo-server-express');
require('./config/mongo-connector');

const { User, Book } = require('./models');

const typeDefs = require('./schemas');

const resolvers = {
	Query: {
		getUsers: async () => await User.find({}).exec(),
		getBooks: async () => await Book.find({}).exec()
	},
	Mutation: {
		addUser: async (_, args) => {
			try {
				let response = await User.create(args);
				return response;
			} catch (error) {
				return error.message;
			}
		},
		addBook: async (_, args) => {
			try {
				let response = await Book.create(args);
				return response;
			} catch (error) {
				return error.message;
			}
		}
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, err => {
	if (err) {
		console.error(`Something went wrong ${err.message}`);
	}
	console.log(`The magic happen at http://localhost:${4000}`);
});
