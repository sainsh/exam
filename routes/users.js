var express = require('express');
var router = express.Router();
var db = require('../model/db');
const fs = require('fs');

router.get('/', function(req, res, next) {
    let rawdata = fs.readFileSync('model/json/users.json');
    let json = JSON.parse(rawdata);

    res.json(json);
});

router.get('/:id',function(req, res, next) {
    let rawdata = fs.readFileSync('model/json/users.json');
    let json = JSON.parse(rawdata);
    var id = req.path.slice(10);

    res.json(json[id]);

});

router.post('/', function(req, res, next) {
    let rawdata = fs.readFileSync('model/json/users.json');
    let json = JSON.parse(rawdata);
    json.push(req.body)
    fs.writeFileSync('model/json/users.json', JSON.stringify(json))
    res.json(json);

});

router.put('/:id',function(req, res, next) {
    let rawdata = fs.readFileSync('model/json/users.json');
    let json = JSON.parse(rawdata);
    var id = req.path.slice(10);
    json[id]= req.body;
    fs.writeFileSync('model/json/users.json', JSON.stringify(json))

    res.json(json[id]);

});

router.delete('/:id', (req,res,next) => {
    let rawdata = fs.readFileSync('model/json/users.json');
    let json = JSON.parse(rawdata);
    var id = req.path.slice(10);

    json.splice(id, 1);
    fs.writeFileSync('model/json/users.json', JSON.stringify(json))
    res.json(json);
});

module.exports = router;