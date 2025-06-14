import { body, param } from 'express-validator';

// Create Visit
const createVisitValidator = [
  body('visiter_id').isInt().withMessage('visiter_id must be an integer'),
  body('visited_id').isInt().withMessage('visited_id must be an integer'),
];

// Get Visits Made to a User
const getVisitedValidator = [
  param('user_id').isInt().withMessage('user_id must be an integer'),
];

// Get Visits Made by a User
const getVisiterValidator = [
  param('user_id').isInt().withMessage('user_id must be an integer'),
];

export {
  createVisitValidator,
  getVisitedValidator,
  getVisiterValidator
};
