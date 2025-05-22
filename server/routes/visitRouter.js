const express = require('express');
const { body, param, validationResult } = require('express-validator');
const visitRouter = express.Router();
const { successResponse, errorResponse } = require('../helper/responseHelper');
const { Visit, User } = require('../models/Schemas');

// Middleware for validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation error", errors.array(), 422);
  }
  next();
};

// Record a Visit
visitRouter.post('/add', [
  body('visiter_id').isInt().withMessage('visiter_id must be an integer'),
  body('visited_id').isInt().withMessage('visited_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { visiter_id, visited_id } = req.body;

    const visit = await Visit.create({
      visiter_id,
      visited_id,
      time: new Date()
    });

    successResponse(res, "Visit recorded", [visit], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get Visits Made to a User
visitRouter.get('/visited/:user_id', [
  param('user_id').isInt().withMessage('user_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const visits = await Visit.findAll({
      where: { visited_id: req.params.user_id },
      include: [{ model: User, as: 'visiter', attributes: ['id', 'username'] }]
    });

    successResponse(res, "Visits received", visits, 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get Visits Made by a User
visitRouter.get('/visiter/:user_id', [
  param('user_id').isInt().withMessage('user_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const visits = await Visit.findAll({
      where: { visiter_id: req.params.user_id },
      include: [{ model: User, as: 'visited', attributes: ['id', 'username'] }]
    });

    successResponse(res, "Visits made", visits, 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

module.exports = visitRouter;
