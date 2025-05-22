const express = require('express');
const { body, param, validationResult } = require('express-validator');
const infoRouter = express.Router();
const { successResponse, errorResponse } = require('../helper/responseHelper');
const { Info, User } = require('../models/Schemas');

// Middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation error", errors.array(), 422);
  }
  next();
};

// Create Info
infoRouter.post('/add', [
  body('user_id').isInt().withMessage('user_id must be an integer'),
  body('gender').optional().isIn(['male', 'female', 'other']).withMessage('Invalid gender'),
  body('age').optional().isInt({ min: 18 }).withMessage('Age must be 18 or older'),
  body('firstName').optional().isString(),
  body('lastName').optional().isString(),
  body('sexuality').optional().isString(),
  body('bio').optional().isString(),
  body('profile_pic').optional().isString(),
  body('popularity').isInt().withMessage('Popularity is required and must be an integer'),
  body('latitude').optional().isFloat(),
  body('longitude').optional().isFloat(),
  body('address_modified').optional().isBoolean(),
  handleValidationErrors
], async (req, res) => {
  try {
    const info = await Info.create(req.body);
    successResponse(res, "User Info Created Successfully", [info], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get Info by User ID
infoRouter.get('/:user_id', [
  param('user_id').isInt().withMessage('user_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const info = await Info.findOne({
      where: { user_id: req.params.user_id },
      include: [{ model: User, as: 'user', attributes: ['id', 'username', 'email'] }]
    });

    if (!info) return successResponse(res, "Info not found", [], 200);

    successResponse(res, "User Info", [info], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Update Info
infoRouter.put('/:user_id', [
  param('user_id').isInt().withMessage('user_id must be an integer'),
  body('gender').optional().isIn(['male', 'female', 'other']),
  body('age').optional().isInt({ min: 18 }),
  body('firstName').optional().isString(),
  body('lastName').optional().isString(),
  body('sexuality').optional().isString(),
  body('bio').optional().isString(),
  body('profile_pic').optional().isString(),
  body('popularity').optional().isInt(),
  body('latitude').optional().isFloat(),
  body('longitude').optional().isFloat(),
  body('address_modified').optional().isBoolean(),
  handleValidationErrors
], async (req, res) => {
  try {
    const info = await Info.findOne({ where: { user_id: req.params.user_id } });

    if (!info) return successResponse(res, "Info not found", [], 200);

    Object.assign(info, req.body);
    await info.save();

    successResponse(res, "User Info Updated", [info], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Delete Info
infoRouter.delete('/:user_id', [
  param('user_id').isInt().withMessage('user_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const info = await Info.findOne({ where: { user_id: req.params.user_id } });

    if (!info) return successResponse(res, "Info not found", [], 200);

    await info.destroy();
    successResponse(res, "User Info Deleted", [], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

module.exports = infoRouter;
