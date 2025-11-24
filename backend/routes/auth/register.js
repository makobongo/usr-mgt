var express = require('express');
var router = express.Router();
const registerValidator = require('../../validators/auth/register');
const registerController = require('../../controllers/auth/register')

/* POST registration details. */
router.post('/register',registerValidator, registerController.register);

module.exports = router;