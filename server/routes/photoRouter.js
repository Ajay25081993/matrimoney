import express from 'express';
import { successResponse, errorResponse } from '../helper/responseHelper.js';
import { Photo } from '../models/Schemas.js';
import handleValidationErrors from '../middleware/validateRequest.js';
import {
  addOrUpdatePhotosValidation,
  userIdParamValidation
} from '../validators/photoValidator.js';

const photoRouter = express.Router();

// Add or Update Photos for a User
photoRouter.post('/add-or-update',
  addOrUpdatePhotosValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { user_id, pic1, pic2, pic3, pic4, pic5 } = req.body;

      let photos = await Photo.findOne({ where: { user_id } });

      if (photos) {
        photos.pic1 = pic1 !== undefined ? pic1 : photos.pic1;
        photos.pic2 = pic2 !== undefined ? pic2 : photos.pic2;
        photos.pic3 = pic3 !== undefined ? pic3 : photos.pic3;
        photos.pic4 = pic4 !== undefined ? pic4 : photos.pic4;
        photos.pic5 = pic5 !== undefined ? pic5 : photos.pic5;
        await photos.save();
        successResponse(res, "Photos updated successfully", [photos], 200);
      } else {
        photos = await Photo.create({ user_id, pic1, pic2, pic3, pic4, pic5 });
        successResponse(res, "Photos added successfully", [photos], 200);
      }
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Get Photos by User ID
photoRouter.get('/:user_id',
  userIdParamValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const photos = await Photo.findOne({ where: { user_id: req.params.user_id } });

      if (!photos) return successResponse(res, "Photos not found", [], 200);

      successResponse(res, "Photos details", [photos], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

export default photoRouter;
