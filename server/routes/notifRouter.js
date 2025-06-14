import express from 'express';
import { successResponse, errorResponse } from '../helper/responseHelper.js';
import { Notif } from '../models/Schemas.js';
import handleValidationErrors from '../middleware/validateRequest.js';
import {
  addNotificationValidation,
  listNotificationsValidation,
  updateNotificationValidation,
  deleteNotificationValidation
} from '../validators/notifValidator.js';

const notifRouter = express.Router();

// Create Notification
notifRouter.post('/add',
  addNotificationValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { user_id, notifier_name, type, content, time, read } = req.body;
      const notif = await Notif.create({
        user_id,
        notifier_name,
        type,
        content,
        time: time || new Date(),
        read: read || false
      });
      successResponse(res, "Notification created successfully", [notif], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// List Notifications for a User
notifRouter.get('/list/:user_id',
  listNotificationsValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { user_id } = req.params;
      const { page_no = 1, per_page = 10 } = req.query;
      const offset = (page_no - 1) * per_page;

      const notifs = await Notif.findAndCountAll({
        where: { user_id },
        limit: parseInt(per_page),
        offset: parseInt(offset),
        order: [['time', 'DESC']]
      });

      successResponse(res, "Notification list", [{
        total: notifs.count,
        data: notifs.rows
      }], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Mark Notification as Read / Update Notification
notifRouter.put('/:id',
  updateNotificationValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { id } = req.params;
      const { read } = req.body;

      const notif = await Notif.findByPk(id);
      if (!notif) return successResponse(res, "Notification not found", [], 200);

      notif.read = read;
      await notif.save();

      successResponse(res, "Notification updated successfully", [notif], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Delete Notification
notifRouter.delete('/:id',
  deleteNotificationValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { id } = req.params;

      const notif = await Notif.findByPk(id);
      if (!notif) return successResponse(res, "Notification not found", [], 200);

      await notif.destroy();

      successResponse(res, "Notification deleted successfully", [], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

export default notifRouter;
