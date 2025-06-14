import express from 'express';
import { successResponse, errorResponse } from '../helper/responseHelper.js';
import { Dislike, User } from '../models/Schemas.js';
import handleValidationErrors from '../middleware/validateRequest.js';
import {
  addDislikeValidation,
  getDislikesByUserValidation,
  getDislikedByValidation,
  deleteDislikeValidation,
} from '../validators/dislikeValidator.js';

const dislikeRouter = express.Router();

// Add Dislike
dislikeRouter.post('/add',
  addDislikeValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { disliker_id, disliked_id } = req.body;
      const dislike = await Dislike.create({ disliker_id, disliked_id });
      successResponse(res, "Dislike added successfully", [dislike], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Get Dislikes by User
dislikeRouter.get('/by-user/:disliker_id',
  getDislikesByUserValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const dislikes = await Dislike.findAll({
        where: { disliker_id: req.params.disliker_id },
        include: [{ model: User, as: 'dislikedUser', attributes: ['id', 'username', 'email'] }]
      });
      successResponse(res, "Dislikes by user", dislikes, 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Get Users Who Disliked a User
dislikeRouter.get('/disliked-by/:disliked_id',
  getDislikedByValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const dislikes = await Dislike.findAll({
        where: { disliked_id: req.params.disliked_id },
        include: [{ model: User, as: 'dislikerUser', attributes: ['id', 'username', 'email'] }]
      });
      successResponse(res, "Users who disliked this user", dislikes, 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Delete Dislike
dislikeRouter.delete('/:id',
  deleteDislikeValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const dislike = await Dislike.findOne({ where: { id: req.params.id } });
      if (!dislike) return successResponse(res, "Dislike not found", [], 200);

      await dislike.destroy();
      successResponse(res, "Dislike deleted successfully", [], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

export default dislikeRouter;
