import { login, register,logout } from "../controllers/auth.controller.js";

import express from "express"

const authRouter = express.Router();

// Validators
import { registerValidator, loginValidator } from '../validators/authValidator.js';
import validateRequest from '../middleware/validateRequest.js';
import authMiddleware from "../middleware/authMiddleware.js";


authRouter.post("/register", registerValidator, validateRequest, register);
authRouter.post("/login", loginValidator, validateRequest, login);
authRouter.post("/logout", logout);


export default authRouter;
