const express = require('express');
const router = express.Router();

const { verifyApiKey } = require('./middlewares/verifyApiKey');
const { sendMail } = require('./middlewares/sendMail');

router.post(`/users/:api_key/sending-email`, verifyApiKey, sendMail);

module.exports = router;
