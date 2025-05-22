const express = require('express');
const { body, param, validationResult } = require('express-validator');
const settingsRouter = express.Router();
const { Settings } = require('../models/Schemas'); // Adjust the path if needed
const { successResponse, errorResponse } = require('../helper/responseHelper');

// Middleware for validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation error", errors.array(), 422);
  }
  next();
};

// Create or Update Settings (Upsert)
settingsRouter.post('/',
  [
    body('user_id').isInt().withMessage('User ID must be an integer'),
    body('visit').optional().isBoolean(),
    body('like').optional().isBoolean(),
    body('unlike').optional().isBoolean(),
    body('match').optional().isBoolean(),
    body('message').optional().isBoolean(),
    handleValidationErrors,
  ],
  async (req, res) => {
    try {
      const { user_id, visit, like, unlike, match, message } = req.body;

      // Try find existing settings
      let settings = await Settings.findOne({ where: { user_id } });

      if (settings) {
        // Update existing
        settings.visit = visit ?? settings.visit;
        settings.like = like ?? settings.like;
        settings.unlike = unlike ?? settings.unlike;
        settings.match = match ?? settings.match;
        settings.message = message ?? settings.message;
        await settings.save();

        return successResponse(res, "Settings updated successfully", [settings], 200);
      }

      // Create new
      settings = await Settings.create({
        user_id,
        visit: visit ?? true,
        like: like ?? true,
        unlike: unlike ?? true,
        match: match ?? true,
        message: message ?? true,
      });

      successResponse(res, "Settings created successfully", [settings], 201);

    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Get Settings by User ID
settingsRouter.get('/:user_id',
  [
    param('user_id').isInt().withMessage('User ID must be an integer'),
    handleValidationErrors,
  ],
  async (req, res) => {
    try {
      const { user_id } = req.params;

      const settings = await Settings.findOne({ where: { user_id } });

      if (!settings) return successResponse(res, "Settings not found", [], 200);

      successResponse(res, "Settings details", [settings], 200);

    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Delete Settings by User ID
settingsRouter.delete('/:user_id',
  [
    param('user_id').isInt().withMessage('User ID must be an integer'),
    handleValidationErrors,
  ],
  async (req, res) => {
    try {
      const { user_id } = req.params;

      const deleted = await Settings.destroy({ where: { user_id } });

      if (!deleted) return successResponse(res, "Settings not found", [], 200);

      successResponse(res, "Settings deleted successfully", [], 200);

    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

module.exports = settingsRouter;
