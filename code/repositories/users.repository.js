const { User } = require('../models');

class UserRepository {
  async findOrCreateUser({ username }) {
    let user = await User.findOne({ username });
    if (user === null) {
      user = await User.create({ username });

      return user;
    }

    return user;
  }

  async create(userData) {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw new Error('Error creating user: ' + error.message);
    }
  }

  async getById(userId) {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      throw new Error('Error fetching user: ' + error.message);
    }
  }

  async getAll() {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw new Error('Error fetching users: ' + error.message);
    }
  }

  async update(userId, updateData) {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error('User not found');
      }
      await user.update(updateData);
      return user;
    } catch (error) {
      throw new Error('Error updating user: ' + error.message);
    }
  }

  async delete(userId) {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error('User not found');
      }
      await user.destroy();
      return true;
    } catch (error) {
      throw new Error('Error deleting user: ' + error.message);
    }
  }

  async insertMany(users) {
    try {
      return User.insertMany(users);
    } catch (error) {
      throw new Error('Error inserting users: ' + error.message);
    }
  }
}

module.exports = new UserRepository();
