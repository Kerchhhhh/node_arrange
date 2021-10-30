var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 调用视图模板，传递title变量
  // 如何传递参数
  res.send('user: how to involve username value');
});

module.exports = router;
