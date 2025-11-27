var bcrypt = require('bcryptjs');
var connection = require('../../config/db');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.login = async (req, res, next) => {
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
          const token = jwt.sign({ email: results[0]['email'] },process.env.JWT_SECRET,{ expiresIn: '3m' })
          return res.json({
            message: token
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
}