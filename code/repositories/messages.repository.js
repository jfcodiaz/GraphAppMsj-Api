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

      // Usamos populate para obtener el usuario pero sin eliminar el userId original
      const messages = await Message.find()
        .find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate({
          path: 'userId', // El campo que contiene la referencia al usuario
          select: '-password -otherSensitiveFields', // Campos que no quieres incluir
          as: 'user' // Alias donde queremos que se guarde el documento del usuario
        });

      const transformedMessages = messages.map(message => ({
        ...message.toObject(),
        user: message.userId,
        userId: message.userId._id
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
}

module.exports = new MessageRepository();
