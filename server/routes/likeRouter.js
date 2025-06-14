import express from 'express';
import { successResponse, errorResponse } from '../helper/responseHelper.js';
import { Like, User } from '../models/Schemas.js';
import handleValidationErrors from '../middleware/validateRequest.js';
import {
  addLikeValidation,
  getLikesByUserValidation,
  getLikedByValidation,
  deleteLikeValidation
} from '../validators/likeValidator.js';

const likeRouter = express.Router();

// Add Like
likeRouter.post('/add',
  addLikeValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { liker_id, liked_id } = req.body;

      const like = await Like.create({ liker_id, liked_id });
      successResponse(res, "Like added successfully", [like], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Get Likes by User
likeRouter.get('/by-user/:liker_id',
  getLikesByUserValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const likes = await Like.findAll({
        where: { liker_id: req.params.liker_id },
        include: [{ model: User, as: 'likedUser', attributes: ['id', 'username', 'email'] }]
      });

      successResponse(res, "Likes by user", likes, 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Get Users Who Liked a User
likeRouter.get('/liked-by/:liked_id',
  getLikedByValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const likes = await Like.findAll({
        where: { liked_id: req.params.liked_id },
        include: [{ model: User, as: 'likerUser', attributes: ['id', 'username', 'email'] }]
      });

      successResponse(res, "Users who liked this user", likes, 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Delete Like
likeRouter.delete('/:id',
  deleteLikeValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const like = await Like.findOne({ where: { id: req.params.id } });

      if (!like) return successResponse(res, "Like not found", [], 200);

      await like.destroy();
      successResponse(res, "Like deleted successfully", [], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

export default likeRouter;
