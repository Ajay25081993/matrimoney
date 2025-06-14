import { body, param } from 'express-validator';

// Validation for creating/updating settings
const createOrUpdateSettingsValidator = [
  body('user_id').isInt().withMessage('User ID must be an integer'),
  body('visit').optional().isBoolean(),
  body('like').optional().isBoolean(),
  body('unlike').optional().isBoolean(),
  body('match').optional().isBoolean(),
  body('message').optional().isBoolean(),
];

// Validation for getting settings by user_id param
const getSettingsValidator = [
  param('user_id').isInt().withMessage('User ID must be an integer'),
];

// Validation for deleting settings by user_id param
const deleteSettingsValidator = [
  param('user_id').isInt().withMessage('User ID must be an integer'),
];

export {
  createOrUpdateSettingsValidator,
  getSettingsValidator,
  deleteSettingsValidator,
};
