const { body } = require('express-validator');

const loginValidator = [
  
  // Validate and sanitize email
  body('email')
    .notEmpty().withMessage('Email is required.')
    .isEmail().withMessage('Please provide a valid email address.')
    .normalizeEmail(),
  
  // Validate password
  body('password')
    .notEmpty().withMessage('Password is required.')

];

module.exports = loginValidator;