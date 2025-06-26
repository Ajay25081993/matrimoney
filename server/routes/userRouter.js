import express from "express";
import { successResponse, errorResponse } from "../helper/responseHelper.js";
import { User, Info } from "../models/Schemas.js";
import validate from "../middleware/validateRequest.js";
import {
  createUserValidator,
  getUserByIdValidator,
  updateUserValidator,
  deleteUserValidator,
} from "../validators/userValidator.js";
import { updateProfile } from "../controllers/auth.controller.js";

const userRouter = express.Router();

// Create User
userRouter.post("/add", createUserValidator, validate, async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    successResponse(res, "User Created Successfully", [user], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get User List
userRouter.get("/list", async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Info, as: "info" }],
    });
    successResponse(res, "User List", users, 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Get User by ID
userRouter.get(
  "/:user_id",
  getUserByIdValidator,
  validate,
  async (req, res) => {
    try {
      const user = await User.findOne({
        where: { id: req.params.user_id },
        include: [{ model: Info, as: "Info" }],
      });

      if (!user) return successResponse(res, "User not found", [], 200);
      successResponse(res, "User Details", [user], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Update User
userRouter.put("/:user_id", updateUserValidator, validate, async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.user_id } });
    if (!user) return successResponse(res, "User not found", [], 200);

    Object.assign(user, req.body);
    await user.save();

    successResponse(res, "User Updated", [user], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
});

// Delete User
userRouter.delete(
  "/:user_id",
  deleteUserValidator,
  validate,
  async (req, res) => {
    try {
      const user = await User.findOne({ where: { id: req.params.user_id } });
      if (!user) return successResponse(res, "User not found", [], 200);

      await user.destroy();
      successResponse(res, "User Deleted", [], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

userRouter.put("/update-profile", updateProfile);

export default userRouter;
