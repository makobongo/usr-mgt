var express = require('express');
var router = express.Router();
var connection = require('../../config/db');
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator');
const registerValidator = require('../../validators/auth/register');
const { v4: uuidv4 } = require('uuid');

/* GET home page. */
router.post('/register',registerValidator, async(req, res) => {
        // user information
        try {
            //handle validation of the input fields
             const errors = validationResult(req);
             if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            // If validation passes, proceed with business logic
            const { name, email, phone, password } = req.body;
            // Generate a UUID for the new registered user
            const userId = uuidv4();
            // Generate a salt (random string)
            const salt = await bcrypt.genSalt(10);
             // Hashing password with the generated salt
            const hashedPassword = await bcrypt.hash(password, salt);
            // query to insert record to users table
            const user = 'INSERT INTO users (id, name, email, phone, password) VALUES (?,?, ?, ?, ?)';
            connection.execute(user,  [userId, name, email, phone, hashedPassword], (err, results)=>{
                if(err){
                    return res.status(500).json({ message: 'Internal server error' });
                }
                res.status(201).json({
                    message: 'User registered successfully',
                    userId: userId
                });
            });
        } catch (error) {
            return res.json({
                msg: 'Sorry! Not Successful!'
            })
        }
});

module.exports = router;