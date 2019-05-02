const { Book } = require('../models');

const bookQueries = {
  getBooks: async () => await Book.find({}).exec()
};

const bookMutations = {
  addBook: async (_, args) => {
    try {
      let response = await Book.create(args);
      return response;
    } catch (error) {
      return error.message;
    }
  }
};

module.exports = {
  bookQueries,
  bookMutations
};
