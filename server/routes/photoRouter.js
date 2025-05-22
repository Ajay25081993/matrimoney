const express = require('express');
const { body, param, validationResult } = require('express-validator');
const photoRouter = express.Router();
const { successResponse, errorResponse } = require('../helper/responseHelper');
const { Photos, User } = require('../models/Schemas');

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation error", errors.array(), 422);
  }
  next();
};

// Add or Update Photos for a User
photoRouter.post('/add-or-update', [
  body('user_id').isInt().withMessage('user_id must be an integer'),
  body('pic1').optional().isString(),
  body('pic2').optional().isString(),
  body('pic3').optional().isString(),
  body('pic4').optional().isString(),
  body('pic5').optional().isString(),
  handleValidationErrors
], async (req, res) => {
  try {
    const { user_id, pic1, pic2, pic3, pic4, pic5 } = req.body;

    let photos = await Photos.findOne({ where: { user_id } });

    if (photos) {
      // Update existing photos
      photos.pic1 = pic1 !== undefined ? pic1 : photos.pic1;
      photos.pic2 = pic2 !== undefined ? pic2 : photos.pic2;
      photos.pic3 = pic3 !== undefined ? pic3 : photos.pic3;
      photos.pic4 = pic4 !== undefined ? pic4 : photos.pic4;
      photos.pic5 = pic5 !== undefined ? pic5 : photos.pic5;
      await photos.save();
      successResponse(res, "Photos updated successfully", [photos], 200);
    } else {
      // Create new photos record
      photos = await Photos.create({ user_id, pic1, pic2, pic3, pic4, pic5 });
      successResponse(res, "Photos added successfully", [photos], 200);
    }
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get Photos by User ID
photoRouter.get('/:user_id', [
  param('user_id').isInt().withMessage('user_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const photos = await Photos.findOne({ where: { user_id: req.params.user_id } });

    if (!photos) return successResponse(res, "Photos not found", [], 200);

    successResponse(res, "Photos details", [photos], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

module.exports = photoRouter;
