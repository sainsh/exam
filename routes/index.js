var express = require('express');
var router = express.Router();
var db = require('../model/db');
const fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {

  let rawdata = fs.readFileSync('model/json/resurser.json');
  let json = JSON.parse(rawdata);



  res.render('resurserTilHjemlose', { title: 'Resurse til Hjemløse', rows: json});
});

module.exports = router;
