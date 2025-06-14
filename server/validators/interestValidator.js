import { body, param } from 'express-validator';


// Validation for creating interest
const addInterestValidation = [
  body('user_id').isInt().withMessage('user_id must be an integer'),
  body('tag').notEmpty().withMessage('tag is required').isLength({ max: 24 }),
];

// Validation for user_id param (for listing interests)
const userIdParamValidation = [
  param('user_id').isInt().withMessage('user_id must be an integer'),
];

// Validation for interest id param (for update/delete)
const interestIdParamValidation = [
  param('id').isInt().withMessage('id must be an integer'),
];

// Validation for updating interest
const updateInterestValidation = [
  body('tag').notEmpty().withMessage('tag is required').isLength({ max: 24 }),
];

export{
  addInterestValidation,
  userIdParamValidation,
  interestIdParamValidation,
  updateInterestValidation,
};
