var express = require('express');
var router = express.Router();
const loginValidator = require('../../validators/auth/login');
const loginController = require('../../controllers/auth/login')

/* POST home page. */
router.post('/login', loginValidator, loginController.login);

module.exports = router;