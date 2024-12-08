const { z } = require('zod');

const createUserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  about: z.string().min(1, 'About section is required'),
});

const getUserSchema = z.object({
  id: z.string().min(1, 'User ID is required'),
});

const updateUserSchema = z.object({
  id: z.string().min(1, 'User ID is required'),
  name: z.string().min(1, 'Name is required'),
});

module.exports = { createUserSchema, getUserSchema, updateUserSchema };
