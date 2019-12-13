var express = require('express');
var router = express.Router();
var http=require('http');
/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index', { user: "user" });
  
});
router.get('/res', function(req, res, next) {
 res.render('res', {});  
});
router.get('/pay', function(req, res, next) {
 res.render('pay', {});  
});
router.get('/loan', function(req, res, next) {
 res.render('loan', {});  
});
router.get('/getpaid', function(req, res, next) {
 res.render('getpaid', {});  
});
router.get('/transfer', function(req, res, next) {
 res.render('transfer', {});  
});
router.get('/make', function(req, res, next) {
 res.render('make', {});  
});
router.get('/user', function(req, res, next) {
 res.render('user', {});  
});
router.get('/info', function(req, res, next) {
 res.render('info', {});  
});
router.get('/detail', function(req, res, next) {
 res.render('detail', {});  
});
router.post('/pay',function(req, res, next) {
  var ob = {};
  var arra = [];
  arra.push(req.body.content2);
  arra.push(req.body.content3);
  arra.push(req.body.content4);
  ob["contractName"] = "trysa";
  ob["funcName"] = "pay";
  ob["funcParam"] = arra;
  ob["user"] = req.body.content1;
  ob["useAes"] = false;
  ob["contractAddress"] = "0xdd8f78c23ca4671db90576105bead608c487ea5c";
  ob["groupId"] = 1;
  var content=JSON.stringify(ob);
  var options = {
    host: 'localhost',
    port: 5002,
    path: '/WeBASE-Front/trans/handle',
    method: 'POST',
    headers:{
    'Content-Type':'application/json',
    'Content-Length':content.length
    }
  };
  var reqd = http.request(options, function(resd) {
    var _data='';
    resd.on('data', function(chunk){
       _data += chunk;
    });
    resd.on('end', function(){
    var resu = JSON.parse(_data);
        if(resu['statusOK']){
      res.render('res',{result:"success"});
    }
    else res.render('res',{result:"fail"});
     });
  });
  reqd.write(content);
  reqd.end(); 
});
router.post('/getpaid',function(req, res, next) {
  var ob = {};
  var arra = [];
  arra.push(req.body.content2);
  arra.push(req.body.content3);
  arra.push(req.body.content4);
  ob["contractName"] = "trysa";
  ob["funcName"] = "getpaid";
  ob["funcParam"] = arra;
  ob["user"] = req.body.content1;
  ob["useAes"] = false;
  ob["contractAddress"] = "0xdd8f78c23ca4671db90576105bead608c487ea5c";
  ob["groupId"] = 1;
  var content=JSON.stringify(ob);
  var options = {
    host: 'localhost',
    port: 5002,
    path: '/WeBASE-Front/trans/handle',
    method: 'POST',
    headers:{
    'Content-Type':'application/json',
    'Content-Length':content.length
    }
  };
  var reqd = http.request(options, function(resd) {
    var _data='';
    resd.on('data', function(chunk){
       _data += chunk;
    });
    resd.on('end', function(){
    var resu = JSON.parse(_data);
        if(resu['statusOK']){
      res.render('res',{result:"success"});
    }
    else res.render('res',{result:"fail"});
     });
  });
  reqd.write(content);
  reqd.end(); 
});
router.post('/loan',function(req, res, next) {
  var ob = {};
  var arra = [];
  arra.push(req.body.content2);
  ob["contractName"] = "trysa";
  ob["funcName"] = "loan";
  ob["funcParam"] = arra;
  ob["user"] = req.body.content1;
  ob["useAes"] = false;
  ob["contractAddress"] = "0xdd8f78c23ca4671db90576105bead608c487ea5c";
  ob["groupId"] = 1;
  var content=JSON.stringify(ob);
  var options = {
    host: 'localhost',
    port: 5002,
    path: '/WeBASE-Front/trans/handle',
    method: 'POST',
    headers:{
    'Content-Type':'application/json',
    'Content-Length':content.length
    }
  };
  var reqd = http.request(options, function(resd) {
    var _data='';
    resd.on('data', function(chunk){
       _data += chunk;
    });
    resd.on('end', function(){
    var resu = JSON.parse(_data);
        if(resu['statusOK']){
      res.render('res',{result:"success"});
    }
    else res.render('res',{result:"fail"});
     });
  });
  reqd.write(content);
  reqd.end(); 
});
router.post('/pay',function(req, res, next) {
  console.log(req.body.content1);
  var ob = {};
  var arra = [];
  arra.push(req.body.content2);
  arra.push(req.body.content3);
  arra.push(req.body.content4);
  ob["contractName"] = "trysa";
  ob["funcName"] = "pay";
  ob["funcParam"] = arra;
  ob["user"] = req.body.content1;
  ob["useAes"] = false;
  ob["contractAddress"] = "0xdd8f78c23ca4671db90576105bead608c487ea5c";
  ob["groupId"] = 1;
  var content=JSON.stringify(ob);
  var options = {
    host: 'localhost',
    port: 5002,
    path: '/WeBASE-Front/trans/handle',
    method: 'POST',
    headers:{
    'Content-Type':'application/json',
    'Content-Length':content.length
    }
  };
  var reqd = http.request(options, function(resd) {
    var _data='';
    resd.on('data', function(chunk){
       _data += chunk;
    });
    resd.on('end', function(){
    var resu = JSON.parse(_data);
        if(resu['statusOK']){
      res.render('res',{result:"success"});
    }
    else res.render('res',{result:"fail"});
     });
  });
  reqd.write(content);
  reqd.end(); 
});
router.post('/transfer',function(req, res, next) {
  var ob = {};
  var arra = [];
  arra.push(req.body.content2);
  arra.push(req.body.content3);
  ob["contractName"] = "trysa";
  ob["funcName"] = "make_a_deal_transfer";
  ob["funcParam"] = arra;
  ob["user"] = req.body.content1;
  ob["useAes"] = false;
  ob["contractAddress"] = "0xdd8f78c23ca4671db90576105bead608c487ea5c";
  ob["groupId"] = 1;
  var content=JSON.stringify(ob);
  var options = {
    host: 'localhost',
    port: 5002,
    path: '/WeBASE-Front/trans/handle',
    method: 'POST',
    headers:{
    'Content-Type':'application/json',
    'Content-Length':content.length
    }
  };
  var reqd = http.request(options, function(resd) {
    var _data='';
    resd.on('data', function(chunk){
       _data += chunk;
    });
    resd.on('end', function(){
    var resu = JSON.parse(_data);
        if(resu['statusOK']){
      res.render('res',{result:"success"});
    }
    else res.render('res',{result:"fail"});
     });
  });
  reqd.write(content);
  reqd.end(); 
});
router.post('/make',function(req, res, next) {
  console.log(req.body.content1);
  var ob = {};
  var arra = [];
  arra.push(req.body.content2);
  arra.push(req.body.content3);
  arra.push(req.body.content4);
  arra.push(req.body.content5);
  ob["contractName"] = "trysa";
  ob["funcName"] = "make_a_deal_transfer";
  ob["funcParam"] = arra;
  ob["user"] = req.body.content1;
  ob["useAes"] = false;
  ob["contractAddress"] = "0xdd8f78c23ca4671db90576105bead608c487ea5c";
  ob["groupId"] = 1;
  var content=JSON.stringify(ob);
  var options = {
    host: 'localhost',
    port: 5002,
    path: '/WeBASE-Front/trans/handle',
    method: 'POST',
    headers:{
    'Content-Type':'application/json',
    'Content-Length':content.length
    }
  };
  var reqd = http.request(options, function(resd) {
    var _data='';
    resd.on('data', function(chunk){
       _data += chunk;
    });
    resd.on('end', function(){
    var resu = JSON.parse(_data);
        if(resu['statusOK']){
      res.render('res',{result:"success"});
    }
    else res.render('res',{result:"fail"});
     });
  });
  reqd.write(content);
  reqd.end(); 
});
router.post('/info',function(req, res, next) {
  console.log(req.body.content1);
  var ob = {};
  var arra = [];
  arra.push(req.body.content1);
  ob["contractName"] = "trysa";
  ob["funcName"] = "balances";
  ob["funcParam"] = arra;
  ob["user"] = req.body.content1;
  ob["useAes"] = false;
  ob["contractAddress"] = "0xdd8f78c23ca4671db90576105bead608c487ea5c";
  ob["groupId"] = 1;
  var content=JSON.stringify(ob);
  var options = {
    host: 'localhost',
    port: 5002,
    path: '/WeBASE-Front/trans/handle',
    method: 'POST',
    headers:{
    'Content-Type':'application/json',
    'Content-Length':content.length
    }
  };
  var reqd = http.request(options, function(resd) {
    var _data='';
    resd.on('data', function(chunk){
       _data += chunk;
    });
    resd.on('end', function(){
    var resu = JSON.parse(_data);
        res.render('detail',{key:req.body.content1,amoun:resu[0]});
     });
  });
  reqd.write(content);
  reqd.end(); 
});
module.exports = router;
