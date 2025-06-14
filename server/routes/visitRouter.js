import express from 'express';
import { successResponse, errorResponse } from '../helper/responseHelper.js';
import { Visit, User } from '../models/Schemas.js';
import validate from '../middleware/validateRequest.js';
import {
  createVisitValidator,
  getVisitedValidator,
  getVisiterValidator
} from '../validators/visitValidator.js';

const visitRouter = express.Router();

// Record a Visit
visitRouter.post('/add', createVisitValidator, validate, async (req, res) => {
  try {
    const { visiter_id, visited_id } = req.body;

    const visit = await Visit.create({
      visiter_id,
      visited_id,
      time: new Date()
    });

    successResponse(res, "Visit recorded", [visit], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get Visits Made to a User
visitRouter.get('/visited/:user_id', getVisitedValidator, validate, async (req, res) => {
  try {
    const visits = await Visit.findAll({
      where: { visited_id: req.params.user_id },
      include: [{ model: User, as: 'visiter', attributes: ['id', 'username'] }]
    });

    successResponse(res, "Visits received", visits, 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get Visits Made by a User
visitRouter.get('/visiter/:user_id', getVisiterValidator, validate, async (req, res) => {
  try {
    const visits = await Visit.findAll({
      where: { visiter_id: req.params.user_id },
      include: [{ model: User, as: 'visited', attributes: ['id', 'username'] }]
    });

    successResponse(res, "Visits made", visits, 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

export default visitRouter;
