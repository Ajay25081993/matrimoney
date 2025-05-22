const express = require('express');
const { body, param, validationResult } = require('express-validator');
const dislikeRouter = express.Router();
const { successResponse, errorResponse } = require('../helper/responseHelper');
const { Dislike, User } = require('../models/Schemas');

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation error", errors.array(), 422);
  }
  next();
};

// Add Dislike
dislikeRouter.post('/add', [
  body('disliker_id').isInt().withMessage('disliker_id must be an integer'),
  body('disliked_id').isInt().withMessage('disliked_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { disliker_id, disliked_id } = req.body;

    const dislike = await Dislike.create({ disliker_id, disliked_id });
    successResponse(res, "Dislike added successfully", [dislike], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get Dislikes by User
dislikeRouter.get('/by-user/:disliker_id', [
  param('disliker_id').isInt().withMessage('disliker_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const dislikes = await Dislike.findAll({
      where: { disliker_id: req.params.disliker_id },
      include: [{ model: User, as: 'dislikedUser', attributes: ['id', 'username', 'email'] }]
    });

    successResponse(res, "Dislikes by user", dislikes, 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get Users Who Disliked a User
dislikeRouter.get('/disliked-by/:disliked_id', [
  param('disliked_id').isInt().withMessage('disliked_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const dislikes = await Dislike.findAll({
      where: { disliked_id: req.params.disliked_id },
      include: [{ model: User, as: 'dislikerUser', attributes: ['id', 'username', 'email'] }]
    });

    successResponse(res, "Users who disliked this user", dislikes, 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Delete Dislike
dislikeRouter.delete('/:id', [
  param('id').isInt().withMessage('id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const dislike = await Dislike.findOne({ where: { id: req.params.id } });

    if (!dislike) return successResponse(res, "Dislike not found", [], 200);

    await dislike.destroy();
    successResponse(res, "Dislike deleted successfully", [], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

module.exports = dislikeRouter;
