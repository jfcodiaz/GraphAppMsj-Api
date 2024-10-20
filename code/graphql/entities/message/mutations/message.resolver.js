const messagesRepository = require("../../../../repositories/messages.repository");

module.exports = {
    Mutation: {
        message: async (_, { userId, text }) => {
            try {
                const message = await messagesRepository.create({ userId, text }); 
                return message.toJSON();
            } catch (error) {
                console.error(error);
                throw new Error("Error registering user");
            }
        },
    }, 
    Message: {
        id: (parent) => parent._id.toString()
    }
}; 