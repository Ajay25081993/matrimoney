const express = require('express');
const { body, param, validationResult } = require('express-validator');
const connectionRouter = express.Router();
const { successResponse, errorResponse } = require('../helper/responseHelper');
const { Connection, User } = require('../models/Schemas');

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation error", errors.array(), 422);
  }
  next();
};

// Create or Update User Connection Time
connectionRouter.post('/update', [
  body('user_id').isInt().withMessage('user_id must be an integer'),
  body('last_connection').optional().isISO8601().withMessage('Invalid datetime format'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { user_id, last_connection } = req.body;

    const [connection, created] = await Connection.upsert({
      user_id,
      last_connection: last_connection || new Date()
    });

    successResponse(res, created ? "Connection recorded" : "Connection updated", [connection], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get User's Last Connection
connectionRouter.get('/:user_id', [
  param('user_id').isInt().withMessage('user_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { user_id } = req.params;

    const connection = await Connection.findOne({
      where: { user_id },
      include: [{ model: User, as: 'user', attributes: ['id', 'username', 'email'] }]
    });

    if (!connection) return successResponse(res, "No connection record found", [], 200);

    successResponse(res, "Connection details", [connection], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

module.exports = connectionRouter;
