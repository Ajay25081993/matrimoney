const express = require('express');
const { body, param, validationResult } = require('express-validator');
const likeRouter = express.Router();
const { successResponse, errorResponse } = require('../helper/responseHelper');
const { Like, User } = require('../models/Schemas');

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation error", errors.array(), 422);
  }
  next();
};

// Add Like
likeRouter.post('/add', [
  body('liker_id').isInt().withMessage('liker_id must be an integer'),
  body('liked_id').isInt().withMessage('liked_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { liker_id, liked_id } = req.body;

    const like = await Like.create({ liker_id, liked_id });
    successResponse(res, "Like added successfully", [like], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get Likes by User
likeRouter.get('/by-user/:liker_id', [
  param('liker_id').isInt().withMessage('liker_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const likes = await Like.findAll({
      where: { liker_id: req.params.liker_id },
      include: [{ model: User, as: 'likedUser', attributes: ['id', 'username', 'email'] }]
    });

    successResponse(res, "Likes by user", likes, 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get Users Who Liked a User
likeRouter.get('/liked-by/:liked_id', [
  param('liked_id').isInt().withMessage('liked_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const likes = await Like.findAll({
      where: { liked_id: req.params.liked_id },
      include: [{ model: User, as: 'likerUser', attributes: ['id', 'username', 'email'] }]
    });

    successResponse(res, "Users who liked this user", likes, 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Delete Like
likeRouter.delete('/:id', [
  param('id').isInt().withMessage('id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const like = await Like.findOne({ where: { id: req.params.id } });

    if (!like) return successResponse(res, "Like not found", [], 200);

    await like.destroy();
    successResponse(res, "Like deleted successfully", [], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

module.exports = likeRouter;
