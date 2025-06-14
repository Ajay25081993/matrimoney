import { body, param } from 'express-validator';

// Validation for updating connection time
export const updateConnectionValidation = [
  body('user_id').isInt().withMessage('user_id must be an integer'),
  body('last_connection').optional().isISO8601().withMessage('Invalid datetime format'),
];

// Validation for getting connection by user_id
export const getConnectionValidation = [
  param('user_id').isInt().withMessage('user_id must be an integer'),
];
