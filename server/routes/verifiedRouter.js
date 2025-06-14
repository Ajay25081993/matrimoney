import express from 'express';
import { successResponse, errorResponse } from '../helper/responseHelper.js';
import { Verified, User } from '../models/Schemas.js';
import validate from '../middleware/validateRequest.js';
import {
  createVerificationValidator,
  getVerificationValidator,
  updateVerificationValidator,
  deleteVerificationValidator
} from '../validators/verifiedValidator.js';

const verifiedRouter = express.Router();

// Create Verification Entry
verifiedRouter.post('/add', createVerificationValidator, validate, async (req, res) => {
  try {
    const { user_id, verified } = req.body;
    const record = await Verified.create({ user_id, verified });
    successResponse(res, "Verification Record Created", [record], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get Verification Status by User ID
verifiedRouter.get('/:user_id', getVerificationValidator, validate, async (req, res) => {
  try {
    const record = await Verified.findOne({
      where: { user_id: req.params.user_id },
      include: [{ model: User, as: 'user', attributes: ['id', 'username', 'email'] }]
    });

    if (!record) return successResponse(res, "Verification record not found", [], 200);

    successResponse(res, "Verification Status", [record], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Update Verification Status
verifiedRouter.put('/:user_id', updateVerificationValidator, validate, async (req, res) => {
  try {
    const record = await Verified.findOne({ where: { user_id: req.params.user_id } });

    if (!record) return successResponse(res, "Verification record not found", [], 200);

    record.verified = req.body.verified;
    await record.save();

    successResponse(res, "Verification Status Updated", [record], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Delete Verification Entry
verifiedRouter.delete('/:user_id', deleteVerificationValidator, validate, async (req, res) => {
  try {
    const record = await Verified.findOne({ where: { user_id: req.params.user_id } });

    if (!record) return successResponse(res, "Verification record not found", [], 200);

    await record.destroy();
    successResponse(res, "Verification Record Deleted", [], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

export default verifiedRouter;
