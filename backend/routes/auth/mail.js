var express = require('express');
var router = express.Router();
const emailController = require('../../controllers/auth/mail')

/* POST home page. */
router.post('/otp', emailController.sendEmail);

module.exports = router;