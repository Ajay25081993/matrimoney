import { successResponse, errorResponse } from "../helper/responseHelper.js";

export const checkAuth = (req, res) => {
  try {
    successResponse(res, "Authenticated user fetched successfully", req.user);
  } catch (error) {
    console.error("Error in checkAuth controller:", error.message);
    errorResponse(res, "Internal Server Error");
  }
};
