const { User } = require('../models');

const userQueries = {
  getUsers: async () => await User.find({}).exec()
};

const userMutations = {
  addUser: async (_, args) => {
    try {
      let response = await User.create(args);
      return response;
    } catch (error) {
      return error.message;
    }
  }
};

module.exports = {
  userQueries,
  userMutations
};
