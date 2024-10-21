const messagesRepository = require("../../../../repositories/messages.repository");
const pubsub = require('../../../../init/pubsub');
module.exports = {
    Mutation: {
        message: async (_, { userId, text}) => {
            try {
                const message = await messagesRepository.create({ userId, text }); 
                pubsub.publish("MESSAGE_CREATED", { messageCreated: message });
                return message;
            } catch (error) {
                console.error(error);
                throw new Error("Error registering user");
            }
        },
    }, 
    Message: {
        id: (parent) => parent._id.toString(),
        createdAt: (parent) => parent.createdAt.toISOString(),
    },
    Subscription: {
        messageCreated: {
            subscribe: () => pubsub.asyncIterator("MESSAGE_CREATED"),
        },
    },
};
