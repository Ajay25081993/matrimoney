import { body, param } from 'express-validator';


// Create Verification Entry
const createVerificationValidator = [
  body('user_id').isInt().withMessage('user_id must be an integer'),
  body('verified').isBoolean().withMessage('verified must be a boolean'),
];

// Get Verification by User ID
const getVerificationValidator = [
  param('user_id').isInt().withMessage('user_id must be an integer'),
];

// Update Verification
const updateVerificationValidator = [
  param('user_id').isInt().withMessage('user_id must be an integer'),
  body('verified').isBoolean().withMessage('verified must be a boolean'),
];

// Delete Verification
const deleteVerificationValidator = [
  param('user_id').isInt().withMessage('user_id must be an integer'),
];

export {
  createVerificationValidator,
  getVerificationValidator,
  updateVerificationValidator,
  deleteVerificationValidator,
};
