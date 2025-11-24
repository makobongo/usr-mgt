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
    connection.execute('SELECT email, password FROM users WHERE email = ?', [email], async(error, results, fields) => {
      if(results.length){
        // Compare plaintext vs hashed
        const isMatch = await bcrypt.compare(password, results[0]['password']);
        if(!isMatch){
          return res.json({
            message: 'Sorry! wrong credentials'
          })
        } else {
          return res.json({
            message: 'Logged in successfully'
          })
        }
      }else {
        return res.json({
          message: 'Sorry! wrong credentials'
        })
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Sorry! something went wrong'
    })
  }
});

module.exports = router;