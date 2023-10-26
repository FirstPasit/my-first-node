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

router.post('/items', function(req, res,) {
  if(typeof req.body.item !== 'string'){
    res.status(400).end();
    return;
  }
  store.addItem(req.body.item);
  res.status(201).end();
});

router.get('/bmi', function(reg,res){
  let w = req.params.weight
  let h = req.params.height/100

  let bmi = w / (h*h)
  let description

  if(bmi < 18.5) description = "Underweight"
  else if (bmi < 25) description = "Normal Weight"
  else if (bmi < 30) description = "Overweight"
  else description = "Obersity"

  res.setHeader("Common-Type","application/json")

  res.status(201).send({"bmi":bmi,"description":description})

})

module.exports = router;
