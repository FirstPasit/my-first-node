var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res) {
  //res.send("Hello world!"); //send respond to client
  res.setHeader("Content-Type","application/json");
  res.send({"res_text":"Hello World!"});
});

module.exports = router;
