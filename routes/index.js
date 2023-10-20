var express = require('express');
var router = express.Router();
const store = require("./store");
store.init();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res) {
  //res.send("Hello world!"); //send respond to client
  res.setHeader("Content-Type","application/json");
  res.send({"res_text":"Hello World!"});
});

//see in store module
router.get('/items', function(req, res,) {
  res.send({items: store.getAllItems()});
});

module.exports = router;
