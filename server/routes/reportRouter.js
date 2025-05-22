const express = require('express');
const { body, param, validationResult } = require('express-validator');
const reportRouter = express.Router();
const { successResponse, errorResponse } = require('../helper/responseHelper');
const { Report, User } = require('../models/Schemas');

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation error", errors.array(), 422);
  }
  next();
};

// Create Report
reportRouter.post('/add', [
  body('reporter_id').isInt().withMessage('reporter_id must be an integer'),
  body('reported_id').isInt().withMessage('reported_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const { reporter_id, reported_id } = req.body;

    const report = await Report.create({ reporter_id, reported_id });
    successResponse(res, "User reported successfully", [report], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// List reports by a user
reportRouter.get('/by-user/:reporter_id', [
  param('reporter_id').isInt().withMessage('reporter_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const reports = await Report.findAll({
      where: { reporter_id: req.params.reporter_id },
      include: [{ model: User, as: 'reportedUser', attributes: ['id', 'username', 'email'] }]
    });

    successResponse(res, "Reports by user", reports, 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// List reports against a user
reportRouter.get('/against-user/:reported_id', [
  param('reported_id').isInt().withMessage('reported_id must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const reports = await Report.findAll({
      where: { reported_id: req.params.reported_id },
      include: [{ model: User, as: 'reporterUser', attributes: ['id', 'username', 'email'] }]
    });

    successResponse(res, "Reports against user", reports, 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Delete a report
reportRouter.delete('/:id', [
  param('id').isInt().withMessage('Report ID must be an integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    const report = await Report.findOne({ where: { id: req.params.id } });

    if (!report) return successResponse(res, "Report not found", [], 200);

    await report.destroy();
    successResponse(res, "Report removed successfully", [], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

module.exports = reportRouter;
