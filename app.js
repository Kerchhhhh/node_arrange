var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 指定路径组织返回内容 控制器
var indexRouter = require('./routes/index');    
var usersRouter = require('./routes/users');    
var helloRouter = require('./routes/hello');
var usernameRouter = require('./routes/username');

var app = express();

// view engine setup
// app.set('title', 'My Site')
// 设置模板引擎和页面模板
app.set('views', path.join(__dirname, 'views'));  // 页面模板在views子目录下
app.set('view engine', 'ejs');                    // 要使用的模板引擎式ejs
/* 
页面布局功能关闭
app.set('view option', {
  layout: false
})
*/

// 视图片段




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 配置静态文件服务器
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello', helloRouter);
app.use('/users/:username', usernameRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
