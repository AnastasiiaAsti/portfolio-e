var express = require('express');
var router = express.Router();

const Project = require('../models/project');

/* GET home page. */
router.get('/', function (req, res, next) {
  Project.find({}, function (err, projects) {
    res.render('index', {projects});
  })
});

module.exports = router;
