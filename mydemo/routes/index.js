var express = require('express');
var router = express.Router();
var svgCaptcha = require('svg-captcha');
/* 导入mysql模块 */
var mysql = require('mysql');
var pool = mysql.createPool({
  host:'localhost',
  port     : 3306, // 数据库连接的端口号 默认是3306  
  database : 'myboke', // 需要查询的数据库  
  user     : 'root', // 用户名  
  password : 'root' // 密码，我的密码是空。所以是空字符串  
});     // 使用DBConfig.js的配置信息创建一个MySQL连接池

/* GET home page. */
router.get('/api/', function(req, res, next) {

  pool.query('select  * from article', function(err, rows, fields) {
    if (err) throw err;
    res.send(rows)
  });
});

// 登录用户密码
router.get('/api/login', function(req, res, next) {
  if(req.session.sign){
    res.json({username:req.session.username,passname:req.session.passname})
  }else{
    res.send();
  }
})
// 获取验证码

router.get('/api/getCaptcha', function(req, res, next) {
  var code = svgCaptcha.create({
    inverse: false,         // 翻转颜色
    ignoreChars: '0o1i',    // 验证码字符中排除 0o1i
    fontSize: 32,           // 字体大小
    noise: 2,               // 噪声线条数
    width: 130,             // 宽度
    height: 29,             // 高度
    color:false,            
  });
  req.session.captcha = code.text.toLowerCase();
  res.send(code.data);
 })
// 登录
router.post('/api/login', function(req, res, next) {
  var user=req.body.user
  var pass=req.body.pass;
  pool.query(`select * from userinfo where user='${user}'`, function(err, rows, fields) {
    if (err) throw err;
    if(rows.length==0){
      res.send({ok:false,msg:'用户名不存在'});
    }else{
      if (rows[0].pass == pass) {
        req.session.username=rows[0].user;
        req.session.passname=rows[0].pass;
        req.session.sign=true;
        res.send({ok:true,msg:'登录成功'});
      }else{
          res.send({ok:false,msg:'密码错误'})
      }  
    }
  });
});
//退出
router.get('/api/logout', function(req, res, next) {
  req.session.sign=false;
  // req.session.destroy();
  res.json({ok:true,msg:'退出成功'})
});


// 注册
router.post('/api/register', function(req, res, next) {
  var user=req.body.user
  var pass=req.body.pass;
  var code=req.body.code;
  if (req.session.captcha == code){
    pool.query(`select * from userinfo where user='${user}'`, function(err, rows, fields) {
      if (err) throw err;
      if(rows[0]==undefined || rows.length==0){
        pool.query(`insert into userinfo(user,pass) values('${user}','${pass}')`, function(err, rows, fields) {
          if(rows.affectedRows==1){
            res.json({ok:true,msg:'注册成功，快去登录吧！'})
          }else{
            res.json({ok:false,msg:'添加失败!'})
          }
          if (err) throw err
        })
      }else{
        res.send({ok:false,msg:'该用户名以存在，请选用其他用户名！'});
      }
    });
  }else{
    res.send({ok:false,msg:'验证码错误，请重试！'});
  }
});

// 获取具体文章
router.get('/api/article/:id', function(req, res, next) {
  var id=req.params.id ? req.params.id : 1;
  pool.query(`select  * from article where id=${id}`, function(err, rows, fields) {
    if (err) throw err;
    res.send(rows)
  });      
});

// 数据库省位置
router.get('/api/province', function(req, res, next) {
  pool.query('select  * from hat_province', function(err, rows, fields) {
    if (err) throw err;
    res.send(rows)
  });
});
// 数据库市位置
router.get('/api/city', function(req, res, next) {
  var city=req.query.id;
  pool.query(`select  * from hat_city where father=${city}`, function(err, rows, fields) {
    if (err) throw err;
    res.send(rows)
  });
});
// 数据库县位置
router.get('/api/area', function(req, res, next) {
  var area=req.query.id;
  pool.query(`select  * from hat_area where father=${area}`, function(err, rows, fields) {
    if (err) throw err;
    res.send(rows)
  });
});



module.exports = router;
