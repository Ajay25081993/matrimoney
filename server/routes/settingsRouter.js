import express from 'express';
import { Setting } from '../models/Schemas.js';
import { successResponse, errorResponse } from '../helper/responseHelper.js';
import validate from '../middleware/validateRequest.js';
import {
  createOrUpdateSettingsValidator,
  getSettingsValidator,
  deleteSettingsValidator
} from '../validators/settingsValidator.js';

const settingsRouter = express.Router();

// Create or Update Settings
settingsRouter.post(
  '/',
  createOrUpdateSettingsValidator,
  validate,
  async (req, res) => {
    try {
      const { user_id, visit, like, unlike, match, message } = req.body;

      let settings = await Setting.findOne({ where: { user_id } });

      if (settings) {
        settings.visit = visit ?? settings.visit;
        settings.like = like ?? settings.like;
        settings.unlike = unlike ?? settings.unlike;
        settings.match = match ?? settings.match;
        settings.message = message ?? settings.message;
        await settings.save();

        return successResponse(res, "Settings updated successfully", [settings], 200);
      }

      settings = await Setting.create({
        user_id,
        visit: visit ?? true,
        like: like ?? true,
        unlike: unlike ?? true,
        match: match ?? true,
        message: message ?? true,
      });

      successResponse(res, "Settings created successfully", [settings], 201);

    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Get Settings by User ID
settingsRouter.get(
  '/:user_id',
  getSettingsValidator,
  validate,
  async (req, res) => {
    try {
      const { user_id } = req.params;

      const settings = await Setting.findOne({ where: { user_id } });

      if (!settings) return successResponse(res, "Settings not found", [], 200);

      successResponse(res, "Settings details", [settings], 200);

    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Delete Settings by User ID
settingsRouter.delete(
  '/:user_id',
  deleteSettingsValidator,
  validate,
  async (req, res) => {
    try {
      const { user_id } = req.params;

      const deleted = await Setting.destroy({ where: { user_id } });

      if (!deleted) return successResponse(res, "Settings not found", [], 200);

      successResponse(res, "Settings deleted successfully", [], 200);

    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

export default settingsRouter;
