import { body, param, query } from 'express-validator';

// Validation for creating a notification
const addNotificationValidation = [
  body('user_id').isInt().withMessage('user_id must be an integer'),
  body('notifier_name').optional().isString().isLength({ max: 24 }),
  body('type').notEmpty().withMessage('type is required').isLength({ max: 12 }),
  body('content').notEmpty().withMessage('content is required').isLength({ max: 64 }),
  body('time').optional().isISO8601().withMessage('Invalid datetime format'),
  body('read').optional().isBoolean(),
];

// Validation for user_id param + pagination query in listing notifications
const listNotificationsValidation = [
  param('user_id').isInt().withMessage('user_id must be an integer'),
  query('page_no').optional().isInt({ min: 1 }),
  query('per_page').optional().isInt({ min: 1 }),
];

// Validation for updating notification read status
const updateNotificationValidation = [
  param('id').isInt().withMessage('id must be an integer'),
  body('read').isBoolean().withMessage('read must be a boolean'),
];

// Validation for deleting a notification
const deleteNotificationValidation = [
  param('id').isInt().withMessage('id must be an integer'),
];

export{
  addNotificationValidation,
  listNotificationsValidation,
  updateNotificationValidation,
  deleteNotificationValidation,
};
