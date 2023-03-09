const { mailServerApiKey } = require("../../config");
const createError = require('http-errors');
const { ERROR_MESSAGE } = require("../../constants");

exports.verifyApiKey = function (req, res, next) {
  console.log(req.params.api_key);

  if (req.params.api_key !== mailServerApiKey) {
    return next(createError(401, ERROR_MESSAGE.INVALID_API_KEY));
  }

  next();
};
