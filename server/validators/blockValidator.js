import { body, param } from 'express-validator';

export const addBlockValidation = [
  body('blocker_id').isInt().withMessage('blocker_id must be an integer'),
  body('blocked_id').isInt().withMessage('blocked_id must be an integer')
];

export const getBlocksByUserValidation = [
  param('blocker_id').isInt().withMessage('blocker_id must be an integer')
];

export const getBlockedByValidation = [
  param('blocked_id').isInt().withMessage('blocked_id must be an integer')
];

export const deleteBlockValidation = [
  param('id').isInt().withMessage('Block ID must be an integer')
];
