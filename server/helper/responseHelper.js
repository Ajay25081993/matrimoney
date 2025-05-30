// responseHelper.js

function successResponse(res, message = 'Success', data = [],code = 200) {
    return res.status(code).json({
      status_code: true,
      message,
      data
    });
  }
  
  function errorResponse(res, message = 'Error occurred', data = [],code = 500) {
    return res.status(code).json({
      status_code: false,
      message,
      data
    });
  }
  
  module.exports = {
    successResponse,
    errorResponse
  };
  