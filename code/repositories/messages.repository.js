const { Message } = require('../models');

class MessageRepository {
  async create(userData) {
    try {
      const message = await Message.create(userData);
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
      ;
        
      const total = await Message.countDocuments(query);
      const data = {
        data: messages,
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
}

module.exports = new MessageRepository();
