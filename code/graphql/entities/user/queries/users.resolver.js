const userRepository = require('../../../../repositories/users.repository');

module.exports = {
  Query: {
    users: () => {
      return userRepository.getAll();
    },
  },
  User: {
    id: (parent) => parent._id.toString(),
  },
};
