// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const { successResponse } = require('../helper/responseHelper');

const authMiddleware = (req, res, next) => {
  // Get token from header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
   
    successResponse(res,"'Unauthorized: No token provided'",[],401)
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
    req.user = decoded; // Add user info to request object
    next();
  } catch (err) {
    successResponse(res,"'Unauthorized: No token provided'",[],401)
  }
};

module.exports = authMiddleware;
