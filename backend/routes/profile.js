var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth/authMiddleware');

/* POST registration details. */
router.post('/profile',auth,(req, res)=>{
    return res.json({
        message: 'success!'
    })
});

module.exports = router;