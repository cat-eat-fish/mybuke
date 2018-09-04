var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');    // post 请求
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
var svgCaptcha = require('svg-captcha');  



// var proxy = require('http-proxy-middleware');
// var options = {
//   target: 'http://res.42du.cn', // 目标服务器 host
//   changeOrigin: true,               // 默认false，是否需要改变原始主机头为目标URL
//   ws: true,                         // 是否代理websockets
// };
// var exampleProxy = proxy(options);
// app.use('/cityapi', exampleProxy);

var app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cookieParser());                //cookie
app.use(session({                       //session
        secret:'this is a string key',//加密的字符串，里面内容可以随便写
        resave:false,//强制保存session,即使它没变化
        saveUninitialized:true, //强制将未初始化的session存储，默认为true

        cookie:{maxAge:1000*60*60*24*3}
}))                   

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
app.use('/', indexRouter);
app.use('/users', usersRouter);
var history =  require('connect-history-api-fallback');
app.use(history());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

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

// module.exports = app;
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
