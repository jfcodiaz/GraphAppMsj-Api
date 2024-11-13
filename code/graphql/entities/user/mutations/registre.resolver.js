const userRepository = require('../../../../repositories/users.repository');

module.exports = {
  Mutation: {
    join: async (_, { username }) => {
      try {
        const user = await userRepository.findOrCreateUser({ username });
        return user.toJSON();
      } catch (error) {
        console.error(error);
        throw new Error('Error registering user');
      }
    },
  },
};
