const express = require('express');
const { body, param, validationResult } = require('express-validator');
const blockRouter = express.Router();
const { successResponse, errorResponse } = require('../helper/responseHelper');
const { Block, User } = require('../models/Schemas');

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation error", errors.array(), 422);
  }
  next();
};

// Add Block
blockRouter.post('/add', [
  body('blocker_id').isInt().withMessage('blocker_id must be an integer'),
  body('blocked_id').isInt().withMessage('blocked_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { blocker_id, blocked_id } = req.body;

    const block = await Block.create({ blocker_id, blocked_id });
    successResponse(res, "User blocked successfully", [block], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// List users blocked by a user
blockRouter.get('/by-user/:blocker_id', [
  param('blocker_id').isInt().withMessage('blocker_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const blocks = await Block.findAll({
      where: { blocker_id: req.params.blocker_id },
      include: [{ model: User, as: 'blockedUser', attributes: ['id', 'username', 'email'] }]
    });

    successResponse(res, "Blocked users", blocks, 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// List users who blocked a user
blockRouter.get('/blocked-by/:blocked_id', [
  param('blocked_id').isInt().withMessage('blocked_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const blocks = await Block.findAll({
      where: { blocked_id: req.params.blocked_id },
      include: [{ model: User, as: 'blockerUser', attributes: ['id', 'username', 'email'] }]
    });

    successResponse(res, "Users who blocked this user", blocks, 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Remove Block
blockRouter.delete('/:id', [
  param('id').isInt().withMessage('Block ID must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const block = await Block.findOne({ where: { id: req.params.id } });

    if (!block) return successResponse(res, "Block not found", [], 200);

    await block.destroy();
    successResponse(res, "Block removed successfully", [], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

module.exports = blockRouter;
