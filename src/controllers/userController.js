const UserService = require('../services/userService');

exports.createUser = async (req, res, next) => {
  try {
    const result = await UserService.createUser(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.updateUserName = async (req, res, next) => {
  try {
    const user = await UserService.updateUserName(req.params.id, req.body.name);
    res.json(user);
  } catch (err) {
    next(err);
  }
};
