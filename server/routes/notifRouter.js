const express = require('express');
const { body, param, query, validationResult } = require('express-validator');
const notifRouter = express.Router();
const { successResponse, errorResponse } = require('../helper/responseHelper');
const { Notifs } = require('../models/Schemas');

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation error", errors.array(), 422);
  }
  next();
};

// Create Notification
notifRouter.post('/add', [
  body('user_id').isInt().withMessage('user_id must be an integer'),
  body('notifier_name').optional().isString().isLength({ max: 24 }),
  body('type').notEmpty().withMessage('type is required').isLength({ max: 12 }),
  body('content').notEmpty().withMessage('content is required').isLength({ max: 64 }),
  body('time').optional().isISO8601().withMessage('Invalid datetime format'),
  body('read').optional().isBoolean(),
  handleValidationErrors
], async (req, res) => {
  try {
    const { user_id, notifier_name, type, content, time, read } = req.body;
    const notif = await Notifs.create({
      user_id,
      notifier_name,
      type,
      content,
      time: time || new Date(),
      read: read || false
    });
    successResponse(res, "Notification created successfully", [notif], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// List Notifications for a User with Pagination
notifRouter.get('/list/:user_id', [
  param('user_id').isInt().withMessage('user_id must be an integer'),
  query('page_no').optional().isInt({ min: 1 }),
  query('per_page').optional().isInt({ min: 1 }),
  handleValidationErrors
], async (req, res) => {
  try {
    const { user_id } = req.params;
    const { page_no = 1, per_page = 10 } = req.query;
    const offset = (page_no - 1) * per_page;

    const notifs = await Notifs.findAndCountAll({
      where: { user_id },
      limit: parseInt(per_page),
      offset: parseInt(offset),
      order: [['time', 'DESC']]
    });

    successResponse(res, "Notification list", [{
      total: notifs.count,
      data: notifs.rows
    }], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Mark Notification as Read / Update Notification
notifRouter.put('/:id', [
  param('id').isInt().withMessage('id must be an integer'),
  body('read').isBoolean().withMessage('read must be a boolean'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { id } = req.params;
    const { read } = req.body;

    const notif = await Notifs.findByPk(id);
    if (!notif) return successResponse(res, "Notification not found", [], 200);

    notif.read = read;
    await notif.save();

    successResponse(res, "Notification updated successfully", [notif], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Delete Notification
notifRouter.delete('/:id', [
  param('id').isInt().withMessage('id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { id } = req.params;

    const notif = await Notifs.findByPk(id);
    if (!notif) return successResponse(res, "Notification not found", [], 200);

    await notif.destroy();

    successResponse(res, "Notification deleted successfully", [], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

module.exports = notifRouter;
