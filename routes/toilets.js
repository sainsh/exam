var express = require('express');
var router = express.Router();
var toilets = require('../public/javascripts/publicRestrooms')

router.get('/', async function(req, res, next) {
    var data = await toilets.getToilets();

    res.send(data);
  });


module.exports = router;
