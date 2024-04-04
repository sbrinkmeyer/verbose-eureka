var express = require('express');
const { path } = require('express/lib/application');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'index.html'));
/*  res.render('index', { title: 'Express' }); */
});

module.exports = router;
