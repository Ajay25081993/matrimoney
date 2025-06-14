import { Router } from "express";
import { checkAuth } from "../controllers/checkAuth.controller.js";
const checkAuthRouter = Router();

checkAuthRouter.get("/check", checkAuth);
export default checkAuthRouter