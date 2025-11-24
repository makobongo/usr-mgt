var express = require('express');
var router = express.Router();
const { validationResult } = require('express-validator');
const loginValidator = require('../../validators/auth/login');
var connection = require('../../config/db');
var bcrypt = require('bcryptjs');

/* POST home page. */
router.post('/login', loginValidator, async (req, res, next) => {
  try {
    //handle validation of the input fields
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // If validation passes, proceed with business logic
    const { email, password } = req.body;
    // Generating a salt (random string)
    const salt = await bcrypt.genSalt(10);
    // Hashing password with the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);
    connection.execute('SELECT email, password FROM users WHERE email = ?', [email], async(error, results, fields) => {
      if(error){
        return res.status(500).json({
          message: 'Sorry! user not found'
        })
      }
      // Compare plaintext vs hashed
    const isMatch = await bcrypt.compare(password, results[0]['password']);
    if (!isMatch) {
      return res.status(401).json({ message: "login credentials are invalid" });
    }
    res.status(200).json({ message: "Logged in successfully" });
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Sorry! something went wrong'
    })
  }
});

module.exports = router;