const Skill = require('../models/skill')

module.exports = {
    index
};


function index(req, res) {
    Skill.find({}, function (err, skills) {
        res.render('skills/index', { skills });
    });
}