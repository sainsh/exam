var express = require('express');
var router = express.Router();
var db = require('../model/db');
const fs = require('fs');

router.get('/', function(req, res, next) {
    let rawdata = fs.readFileSync('model/json/resurser.json');
    let json = JSON.parse(rawdata);

    res.json(json);
});

router.get('/:id',function(req, res, next) {
    let rawdata = fs.readFileSync('model/json/resurser.json');
    let json = JSON.parse(rawdata);
    var id = req.path.slice(1);

    res.json(json[id]);

});

router.post('/', async function(req, res, next) {
    
    var results = await db.insertData(req.body)
    
    res.json(results);

});

router.put('/:id',function(req, res, next) {
    let rawdata = fs.readFileSync('model/json/resurser.json');
    let json = JSON.parse(rawdata);
    var id = req.path.slice(1);
    json[id]= req.body;
    fs.writeFileSync('model/json/resurser.json', JSON.stringify(json))

    res.json(json[id]);

});

router.delete('/:id', (req,res,next) => {
    let rawdata = fs.readFileSync('model/json/resurser.json');
    let json = JSON.parse(rawdata);
    var id = req.path.slice(1);

    json.splice(id, 1);
    fs.writeFileSync('model/json/resurser.json', JSON.stringify(json))
    res.json(json);
});

module.exports = router;