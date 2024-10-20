const userRepository = require("../../../../repositories/users.repository");

module.exports = {
    Mutation: {
        register: async (_, { username }) => {
            try {
                console.log({ username });
                const user = await userRepository.createUser({ username });
                return user.toJSON();
            } catch (error) {
                console.error(error);
                throw new Error("Error registering user");
            }
        },
    },
};