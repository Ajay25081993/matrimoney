import express from 'express';
import { successResponse, errorResponse } from '../helper/responseHelper.js';
import { Report, User } from '../models/Schemas.js';
import handleValidationErrors from '../middleware/validateRequest.js';
import {
  addReportValidation,
  getReportsByUserValidation,
  getReportsAgainstUserValidation,
  deleteReportValidation
} from '../validators/reportValidator.js';

const reportRouter = express.Router();

// Create Report
reportRouter.post('/add',
  addReportValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { reporter_id, reported_id } = req.body;

      const report = await Report.create({ reporter_id, reported_id });
      successResponse(res, "User reported successfully", [report], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// List reports by a user
reportRouter.get('/by-user/:reporter_id',
  getReportsByUserValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const reports = await Report.findAll({
        where: { reporter_id: req.params.reporter_id },
        include: [{ model: User, as: 'reportedUser', attributes: ['id', 'username', 'email'] }]
      });

      successResponse(res, "Reports by user", reports, 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// List reports against a user
reportRouter.get('/against-user/:reported_id',
  getReportsAgainstUserValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const reports = await Report.findAll({
        where: { reported_id: req.params.reported_id },
        include: [{ model: User, as: 'reporterUser', attributes: ['id', 'username', 'email'] }]
      });

      successResponse(res, "Reports against user", reports, 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

// Delete a report
reportRouter.delete('/:id',
  deleteReportValidation,
  handleValidationErrors,
  async (req, res) => {
    try {
      const report = await Report.findOne({ where: { id: req.params.id } });

      if (!report) return successResponse(res, "Report not found", [], 200);

      await report.destroy();
      successResponse(res, "Report removed successfully", [], 200);
    } catch (error) {
      console.error(error);
      errorResponse(res, "Server error", [], 500);
    }
  }
);

export default reportRouter;
