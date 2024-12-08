const express = require('express');
const {
  createUser,
  getUserById,
  updateUserName,
} = require('../controllers/userController.js');
const {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
} = require('../validators/userValidators.js');
const validate = require('../middleware/validate.js');

const router = express.Router();

router.post('/', validate(createUserSchema), createUser);
router.get('/:id', validate(getUserSchema), getUserById);
router.patch('/:id', validate(updateUserSchema), updateUserName);

module.exports = router;
