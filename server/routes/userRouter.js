const express = require('express');
const { body, param, validationResult } = require('express-validator');
const userRouter = express.Router();
const { successResponse, errorResponse } = require('../helper/responseHelper');
const { User, Info } = require('../models/Schemas');

// Middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation error", errors.array(), 422);
  }
  next();
};

// Create User
userRouter.post('/add', [
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    successResponse(res, "User Created Successfully", [user], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get User List
userRouter.get('/list', async (req, res) => {
  try {
    const users = await User.findAll({ include: [{ model: Info, as: 'info' }] });
    successResponse(res, "User List", users, 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get User by ID
userRouter.get('/:user_id', [
  param('user_id').isInt().withMessage('user_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.user_id },
      include: [{ model: Info, as: 'info' }]
    });

    if (!user) return successResponse(res, "User not found", [], 200);
    successResponse(res, "User Details", [user], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Update User
userRouter.put('/:user_id', [
  param('user_id').isInt().withMessage('user_id must be an integer'),
  body('username').optional().isLength({ min: 2 }),
  body('email').optional().isEmail(),
  body('password').optional().isLength({ min: 6 }),
  handleValidationErrors
], async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.user_id } });
    if (!user) return successResponse(res, "User not found", [], 200);

    Object.assign(user, req.body);
    await user.save();

    successResponse(res, "User Updated", [user], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Delete User
userRouter.delete('/:user_id', [
  param('user_id').isInt().withMessage('user_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.user_id } });
    if (!user) return successResponse(res, "User not found", [], 200);

    await user.destroy();
    successResponse(res, "User Deleted", [], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

module.exports = userRouter;
