var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/order-confirmation", function(req, res, next) {
  console.log("get");
});
router.post("/order-confirmation", function(req, res, next) {
  console.log("post");
});

module.exports = router;
