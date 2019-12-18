var express = require('express');
var router = express.Router();
var db = require('../model/db')


router.get('/', function(req, res, next) {

    res.render('indtastning', { title: 'Indtastining'});
  });


module.exports = router;