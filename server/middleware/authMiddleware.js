// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import { successResponse } from '../helper/responseHelper.js';

const authMiddleware = (req, res, next) => {
  // Get token from header
  const authHeader = req.headers.authorization;
  console.log("AH",authHeader);
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return successResponse(res, 'Unauthorized: No token provided', [], 401);
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
    console.log("decoded",decoded.user.user_id);
    
    req.user = decoded.user.user_id; // Add user info to request object
    next();
  } catch (err) {
    console.log(err);
    
    return successResponse(res, 'Unauthorized: Invalid token', [], 401);
  }
};

export default authMiddleware;
