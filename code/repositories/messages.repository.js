const { Message } = require('../models');

class MessageRepository {
  async create(userData) {
    try {
      const message = await Message.create(userData);

      const populatedMessage = await Message.findById(message._id).populate({
        path: 'userId',
        as: 'user',
      });
      message.user = populatedMessage.userId;

      return message;
    } catch (error) {
      throw new Error('Error creating message: ' + error.message);
    }
  }

  async getAll({ startDate, page = 1, limit = 50 }) {
    try {
      const skip = (page - 1) * limit;
      const query = { createdAt: { $lt: startDate } };

      const messages = await Message.find()
        .find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate({
          path: 'userId',
          as: 'user',
        });

      const transformedMessages = messages.map((message) => ({
        ...message.toObject(),
        user: message.userId,
        userId: message.userId._id,
      }));

      const total = await Message.countDocuments(query);
      const data = {
        data: transformedMessages,
        total: total,
        page,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
      };
      return data;
    } catch (error) {
      throw new Error('Error fetching messages: ' + error.message);
    }
  }

  async insertMany(messages) {
    try {
      return Message.insertMany(messages);
    } catch (error) {
      throw new Error('Error inserting users: ' + error.message);
    }
  }
}

module.exports = new MessageRepository();
