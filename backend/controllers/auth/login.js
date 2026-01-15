var bcrypt = require('bcryptjs');
var connection = require('../../config/db');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const transporter = require('../../config/mail')

exports.login = async (req, res, next) => {
  try {
    //handle validation of the input fields
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // If validation passes, proceed with business logic
    const { email, password } = req.body;
    connection.execute('SELECT name, email, password FROM users WHERE email = ?', [email], async(error, results, fields) => {
      if(results.length){
        // Compare plaintext vs hashed
        const isMatch = await bcrypt.compare(password, results[0]['password']);
        if(!isMatch){
          return res.status(404).json({
            message: 'Sorry! wrong credentials'
          })
        } else {
          // generating random 6 numbers to use for 2 factor auth
          // const verificationNumber = Math.floor(100000 + Math.random() * 900000);
          // const info = await transporter.sendMail({
          //     from: process.env.MAIL_FROM_ADDRESS,
          //     to: results[0]['email'],
          //     subject: "Your OTP Code",
          //     html: `<p style='font-size:14px;'>Hi, ${results[0]['name']} <br />We appreciate your partnership! Use OTP <b style='color:black;font-weight:bold;'>${verificationNumber}</b> to continue with your secure transaction. This OTP is valid for <b style='color:black;font-weight:bold;'>10 minutes</b> and can only be used once. For your security, please do not share this code with anyone.</p>`,
          // });
          // return res.json({
          //     message: info.messageId
          // })
          // return res.json({
          //   message: results[0]['name']
          // })
          const token = jwt.sign({ email: results[0]['email'] },process.env.JWT_SECRET,{ expiresIn: '3m' })
          return res.status(200).json({
            message: token
          })
        }
      }else {
        return res.status(404).json({
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