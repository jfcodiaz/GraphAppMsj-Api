const messagesRepository = require("../../../../repositories/messages.repository");

module.exports = {
    Query: {
        messages: async (_, {startDate, page, limit}) => {
            startDate =  new Date(startDate);
            data = await messagesRepository.getAll({startDate, page, limit});
            console.log(data);
            return data;
        },
    }
};
