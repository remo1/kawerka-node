var express = require('express');
var router = express.Router();

var data = require('../static-data/homepage')

/* GET users listing. */
router.get('/home', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json(data);
});



module.exports = router; 