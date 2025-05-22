const express = require('express');
const { body, param, query, validationResult } = require('express-validator');
const messageRouter = express.Router();
const { successResponse, errorResponse } = require('../helper/responseHelper');
const { Messages, User } = require('../models/Schemas');

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation error", errors.array(), 422);
  }
  next();
};

// Send a Message
messageRouter.post('/send', [
  body('sender_id').isInt().withMessage('sender_id must be an integer'),
  body('receiver_id').isInt().withMessage('receiver_id must be an integer'),
  body('message').notEmpty().withMessage('Message is required').isLength({ max: 256 }).withMessage('Message max length is 256 characters'),
  body('time').optional().isISO8601().withMessage('Invalid datetime format'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { sender_id, receiver_id, message, time } = req.body;
    const msg = await Messages.create({
      sender_id,
      receiver_id,
      message,
      time: time || new Date()
    });
    successResponse(res, "Message sent successfully", [msg], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get Messages between two users (pagination optional)
messageRouter.get('/conversation', [
  query('user1_id').isInt().withMessage('user1_id must be an integer'),
  query('user2_id').isInt().withMessage('user2_id must be an integer'),
  query('page_no').optional().isInt({ min: 1 }),
  query('per_page').optional().isInt({ min: 1 }),
  handleValidationErrors
], async (req, res) => {
  try {
    const { user1_id, user2_id, page_no = 1, per_page = 20 } = req.query;
    const offset = (page_no - 1) * per_page;

    const messages = await Messages.findAndCountAll({
      where: {
        [Op.or]: [
          { sender_id: user1_id, receiver_id: user2_id },
          { sender_id: user2_id, receiver_id: user1_id }
        ]
      },
      limit: parseInt(per_page),
      offset: parseInt(offset),
      order: [['time', 'DESC']]
    });

    successResponse(res, "Conversation messages", [{
      total: messages.count,
      data: messages.rows
    }], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Delete a message by ID
messageRouter.delete('/:id', [
  param('id').isInt().withMessage('id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Messages.findByPk(id);

    if (!message) return successResponse(res, "Message not found", [], 200);

    await message.destroy();

    successResponse(res, "Message deleted successfully", [], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

module.exports = messageRouter;
