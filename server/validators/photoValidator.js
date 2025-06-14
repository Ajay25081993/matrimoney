import { body, param } from 'express-validator';

// Validation for adding or updating photos
const addOrUpdatePhotosValidation = [
  body('user_id').isInt().withMessage('user_id must be an integer'),
  body('pic1').optional().isString(),
  body('pic2').optional().isString(),
  body('pic3').optional().isString(),
  body('pic4').optional().isString(),
  body('pic5').optional().isString(),
];

// Validation for user_id param when fetching photos
const userIdParamValidation = [
  param('user_id').isInt().withMessage('user_id must be an integer'),
];

export {
  addOrUpdatePhotosValidation,
  userIdParamValidation,
};
