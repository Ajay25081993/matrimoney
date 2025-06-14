import { body, param, query } from 'express-validator';


// Validation for sending a message
const sendMessageValidation = [
  body('sender_id').isInt().withMessage('sender_id must be an integer'),
  body('receiver_id').isInt().withMessage('receiver_id must be an integer'),
  body('message')
    .notEmpty().withMessage('Message is required')
    .isLength({ max: 256 }).withMessage('Message max length is 256 characters'),
  body('time').optional().isISO8601().withMessage('Invalid datetime format'),
];

// Validation for fetching conversation messages
const conversationQueryValidation = [
  query('user1_id').isInt().withMessage('user1_id must be an integer'),
  query('user2_id').isInt().withMessage('user2_id must be an integer'),
  query('page_no').optional().isInt({ min: 1 }),
  query('per_page').optional().isInt({ min: 1 }),
];

// Validation for deleting a message by ID
const messageIdParamValidation = [
  param('id').isInt().withMessage('id must be an integer'),
];

export{
  sendMessageValidation,
  conversationQueryValidation,
  messageIdParamValidation,
};
