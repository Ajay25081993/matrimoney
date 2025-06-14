import { body, param } from 'express-validator';


// Validation for adding a dislike
const addDislikeValidation = [
  body('disliker_id').isInt().withMessage('disliker_id must be an integer'),
  body('disliked_id').isInt().withMessage('disliked_id must be an integer'),
];

// Validation for getting dislikes by a disliker
const getDislikesByUserValidation = [
  param('disliker_id').isInt().withMessage('disliker_id must be an integer'),
];

// Validation for getting users who disliked a user
const getDislikedByValidation = [
  param('disliked_id').isInt().withMessage('disliked_id must be an integer'),
];

// Validation for deleting a dislike
const deleteDislikeValidation = [
  param('id').isInt().withMessage('id must be an integer'),
];

export{
  addDislikeValidation,
  getDislikesByUserValidation,
  getDislikedByValidation,
  deleteDislikeValidation,
};
