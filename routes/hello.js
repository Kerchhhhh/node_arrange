var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 调用视图模板，传递title变量
	res.send('hello this is my trying');
});

module.exports = router;
