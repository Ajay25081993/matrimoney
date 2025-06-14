import express from "express";
import { successResponse, errorResponse } from "../helper/responseHelper.js";
import { Interest } from "../models/Schemas.js";
import handleValidationErrors from "../middleware/validateRequest.js";
import {
  addInterestValidation,
  userIdParamValidation,
  interestIdParamValidation,
  updateInterestValidation,
} from "../validators/interestValidator.js";

const interestRouter = express.Router();

// Create Interest
interestRouter.post(
  "/add",
  addInterestValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { user_id, tag } = req.body;
      const interest = await Interest.create({ user_id, tag });
      successResponse(res, "Interest created successfully", [interest], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// List Interests of a User
interestRouter.get(
  "/list/:user_id",
  userIdParamValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { user_id } = req.params;
      const interests = await Interest.findAll({ where: { user_id } });
      successResponse(res, "Interest list", interests, 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Update Interest by ID
interestRouter.put(
  "/:id",
  interestIdParamValidation,
  updateInterestValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { id } = req.params;
      const { tag } = req.body;

      const interest = await Interest.findByPk(id);
      if (!interest) return successResponse(res, "Interest not found", [], 200);

      interest.tag = tag;
      await interest.save();

      successResponse(res, "Interest updated successfully", [interest], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Delete Interest by ID
interestRouter.delete(
  "/:id",
  interestIdParamValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { id } = req.params;

      const interest = await Interest.findByPk(id);
      if (!interest) return successResponse(res, "Interest not found", [], 200);

      await interest.destroy();

      successResponse(res, "Interest deleted successfully", [], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

export default interestRouter;
