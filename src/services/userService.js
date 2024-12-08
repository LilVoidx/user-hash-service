const User = require('../models/User.js');
const md5 = require('md5');
const logger = require('../utils/logger.js');

class UserService {
  static async createUser({ userId, name, about }) {
    const user = new User({ userId, name, about });
    await user.save();
    logger.info(`User created: ${userId}`);
    return { hash: md5(userId) };
  }

  static async getUserById(userId) {
    const user = await User.findOne({ userId });
    if (!user) {
      logger.warn(`User not found: ${userId}`);
      throw new Error('User not found');
    }
    return user;
  }

  static async updateUserName(userId, name) {
    const user = await User.findOneAndUpdate(
      { userId },
      { name },
      { new: true }
    );
    if (!user) {
      logger.warn(`User not found for update: ${userId}`);
      throw new Error('User not found');
    }
    logger.info(`User updated: ${userId}`);
    return user;
  }
}

module.exports = UserService;
