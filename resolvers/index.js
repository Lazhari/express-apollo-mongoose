const { userQueries, userMutations } = require('./users');
const { bookQueries, bookMutations } = require('./books');

const resolvers = {
  Query: {
    ...userQueries,
    ...bookQueries
  },
  Mutation: {
    ...userMutations,
    ...bookMutations
  }
};

module.exports = resolvers;
