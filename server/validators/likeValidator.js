import { body, param } from 'express-validator';


// Validation for adding a like
const addLikeValidation = [
  body('liker_id').isInt().withMessage('liker_id must be an integer'),
  body('liked_id').isInt().withMessage('liked_id must be an integer'),
];

// Validation for liker_id param (for listing likes by user)
const getLikesByUserValidation = [
  param('liker_id').isInt().withMessage('liker_id must be an integer'),
];

// Validation for liked_id param (for listing users who liked a user)
const getLikedByValidation = [
  param('liked_id').isInt().withMessage('liked_id must be an integer'),
];

// Validation for like id param (for delete)
const deleteLikeValidation = [
  param('id').isInt().withMessage('id must be an integer'),
];

export{
  addLikeValidation,
  getLikesByUserValidation,
  getLikedByValidation,
  deleteLikeValidation,
};
