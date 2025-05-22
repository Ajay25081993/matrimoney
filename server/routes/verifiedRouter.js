const express = require('express');
const { body, param, validationResult } = require('express-validator');
const verifiedRouter = express.Router();
const { successResponse, errorResponse } = require('../helper/responseHelper');
const { Verified, User } = require('../models/Schemas');

// Middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation error", errors.array(), 422);
  }
  next();
};

// Create Verification Entry
verifiedRouter.post('/add', [
  body('user_id').isInt().withMessage('user_id must be an integer'),
  body('verified').isBoolean().withMessage('verified must be a boolean'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { user_id, verified } = req.body;
    const record = await Verified.create({ user_id, verified });
    successResponse(res, "Verification Record Created", [record], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get Verification Status by User ID
verifiedRouter.get('/:user_id', [
  param('user_id').isInt().withMessage('user_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const record = await Verified.findOne({
      where: { user_id: req.params.user_id },
      include: [{ model: User, as: 'user', attributes: ['id', 'username', 'email'] }]
    });

    if (!record) return successResponse(res, "Verification record not found", [], 200);

    successResponse(res, "Verification Status", [record], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Update Verification Status
verifiedRouter.put('/:user_id', [
  param('user_id').isInt().withMessage('user_id must be an integer'),
  body('verified').isBoolean().withMessage('verified must be a boolean'),
  handleValidationErrors
], async (req, res) => {
  try {
    const record = await Verified.findOne({ where: { user_id: req.params.user_id } });

    if (!record) return successResponse(res, "Verification record not found", [], 200);

    record.verified = req.body.verified;
    await record.save();

    successResponse(res, "Verification Status Updated", [record], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Delete Verification Entry
verifiedRouter.delete('/:user_id', [
  param('user_id').isInt().withMessage('user_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const record = await Verified.findOne({ where: { user_id: req.params.user_id } });

    if (!record) return successResponse(res, "Verification record not found", [], 200);

    await record.destroy();
    successResponse(res, "Verification Record Deleted", [], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

module.exports = verifiedRouter;
