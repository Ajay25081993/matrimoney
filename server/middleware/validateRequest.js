import { validationResult } from "express-validator";
import { errorResponse } from "../helper/responseHelper.js";


const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation failed", errors.array(), 422);
  }
  next();
};

export default validateRequest