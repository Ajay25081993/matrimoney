import { body, param } from 'express-validator';

// Validation for adding a report
const addReportValidation = [
  body('reporter_id').isInt().withMessage('reporter_id must be an integer'),
  body('reported_id').isInt().withMessage('reported_id must be an integer'),
];

// Validation for fetching reports by reporter user id
const getReportsByUserValidation = [
  param('reporter_id').isInt().withMessage('reporter_id must be an integer'),
];

// Validation for fetching reports against a user
const getReportsAgainstUserValidation = [
  param('reported_id').isInt().withMessage('reported_id must be an integer'),
];

// Validation for deleting a report by id
const deleteReportValidation = [
  param('id').isInt().withMessage('Report ID must be an integer'),
];

export{
  addReportValidation,
  getReportsByUserValidation,
  getReportsAgainstUserValidation,
  deleteReportValidation,
};
