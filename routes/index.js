var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 调用视图模板，传递title变量
  // 调用模板引擎：
  // render的功能式调用模板引擎，并将产生的页面直接返回给客户端
  // 接收两个参数，一个是模板的名字，第二个是传递给模板的数据
  res.render('index', { title: 'Express' });

  /**
   * 多个页面 在页面模板翻译时指定页面布局，设置layout属性
   * 在翻译时，页面模板套用admin.ejs作为页面布局
   * function(req, res) {
   *  res.render('index', {
   *    title: '用户列表-后台管理系统',
   *    layout: 'admin'
   *   })
   * }
   * 
   * 
   */
});

module.exports = router;
