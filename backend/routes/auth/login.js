var express = require('express');
var router = express.Router();

/* POST home page. */
router.post('/login', (req, res, next) => {
  return res.json({
    message: "success!!"
  });
});

module.exports = router;