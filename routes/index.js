// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;


exports.index=function(req,res){
	res.render('index',{title:'Index'});
};

exports.login=function(req,res){
	res.render('login',{title:'用户登录'});
};

exports.doLogin=function(req,res){
	var user={
		username:'admin',
		password:'admin'
	}

	if(req.body.username===user.username&&req.body.password===user.password){
		req.session.user=user;
		return res.redirect('/home');
	}else{
		req.session.error='用户名或密码不正确';
		return res.redirect('/login');
	}
};

exports.logout=function(req,res){
	req.session.user=null;
	res.redirect('/');
};

exports.home=function(req,res){
	res.render('home',{title:'Home'});
};