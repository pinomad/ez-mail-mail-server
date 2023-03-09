const express = require('express');
const router = express.Router();

const { verifyApiKey } = require('./middlewares/verifyApiKey');

router.post(`/users/:api_key/sending-email`, verifyApiKey);

module.exports = router;
