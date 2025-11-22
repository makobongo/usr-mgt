const { body } = require('express-validator');

const registerValidator = [
  // Validate and sanitize name
  body('name')
    .notEmpty().withMessage('Name is required.')
    .isLength({ min: 5 }).withMessage('Name must be at least 5 characters.')
    .trim(),
  
  // Validate and sanitize email
  body('email')
    .isEmail().withMessage('Please provide a valid email address.')
    .normalizeEmail(),

 // Validate and sanitize email
  body('phone')
    .notEmpty().withMessage('Phone number is required.')
    .isLength({ min: 12, max: 12 }).withMessage('Phone must be at least 12 characters.')
    .trim(),
  
  // Validate password
  body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters.')
    .matches(/\d/).withMessage('Password must contain a number.')
    .matches(/[A-Za-z]/).withMessage('Password must contain a letter.')
    .trim(),
  
//   // Confirm password match
//   body('confirmPassword')
//     .custom((value, { req }) => value === req.body.password).withMessage('Passwords do not match.')
];

module.exports = registerValidator;