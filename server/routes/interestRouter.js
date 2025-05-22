const express = require('express');
const { body, param, query, validationResult } = require('express-validator');
const interestRouter = express.Router();
const { successResponse, errorResponse } = require('../helper/responseHelper');
const { Interests } = require('../models/Schemas');

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation error", errors.array(), 422);
  }
  next();
};

// Create Interest
interestRouter.post('/add', [
  body('user_id').isInt().withMessage('user_id must be an integer'),
  body('tag').notEmpty().withMessage('tag is required').isLength({ max: 24 }),
  handleValidationErrors
], async (req, res) => {
  try {
    const { user_id, tag } = req.body;
    const interest = await Interests.create({ user_id, tag });
    successResponse(res, "Interest created successfully", [interest], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// List Interests of a User
interestRouter.get('/list/:user_id', [
  param('user_id').isInt().withMessage('user_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { user_id } = req.params;
    const interests = await Interests.findAll({ where: { user_id } });
    successResponse(res, "Interest list", interests, 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Update Interest by ID
interestRouter.put('/:id', [
  param('id').isInt().withMessage('id must be an integer'),
  body('tag').notEmpty().withMessage('tag is required').isLength({ max: 24 }),
  handleValidationErrors
], async (req, res) => {
  try {
    const { id } = req.params;
    const { tag } = req.body;

    const interest = await Interests.findByPk(id);
    if (!interest) return successResponse(res, "Interest not found", [], 200);

    interest.tag = tag;
    await interest.save();

    successResponse(res, "Interest updated successfully", [interest], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Delete Interest by ID
interestRouter.delete('/:id', [
  param('id').isInt().withMessage('id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { id } = req.params;

    const interest = await Interests.findByPk(id);
    if (!interest) return successResponse(res, "Interest not found", [], 200);

    await interest.destroy();

    successResponse(res, "Interest deleted successfully", [], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

module.exports = interestRouter;
