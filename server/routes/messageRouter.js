import express from "express";
import { successResponse, errorResponse } from "../helper/responseHelper.js";
import { Message } from "../models/Schemas.js";
import handleValidationErrors from "../middleware/validateRequest.js";
import { Op } from "sequelize";
import {
  sendMessageValidation,
  conversationQueryValidation,
  messageIdParamValidation,
} from "../validators/messageValidator.js";

const messageRouter = express.Router();

// Send a Message
messageRouter.post(
  "/send",
  sendMessageValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { sender_id, receiver_id, message, time } = req.body;
      const msg = await Message.create({
        sender_id,
        receiver_id,
        message,
        time: time || new Date(),
      });
      successResponse(res, "Message sent successfully", [msg], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Get Messages between two users (with pagination)
messageRouter.get(
  "/conversation",
  conversationQueryValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { user1_id, user2_id, page_no = 1, per_page = 20 } = req.query;
      const offset = (page_no - 1) * per_page;

      const messages = await Message.findAndCountAll({
        where: {
          [Op.or]: [
            { sender_id: user1_id, receiver_id: user2_id },
            { sender_id: user2_id, receiver_id: user1_id },
          ],
        },
        limit: parseInt(per_page),
        offset: parseInt(offset),
        order: [["time", "DESC"]],
      });

      successResponse(
        res,
        "Conversation messages",
        [
          {
            total: messages.count,
            data: messages.rows,
          },
        ],
        200
      );
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Delete a message by ID
messageRouter.delete(
  "/:id",
  messageIdParamValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { id } = req.params;
      const message = await Message.findByPk(id);

      if (!message) return successResponse(res, "Message not found", [], 200);

      await message.destroy();
      successResponse(res, "Message deleted successfully", [], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

export default messageRouter;
