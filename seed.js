require('dotenv').config();

require('./config/database');

const Project = require('./models/project')
const Skill = require('./models/skill')

const data = require('./data')

const p1 = Project.deleteMany({})
const p2 = Skill.deleteMany({})
Promise.all([p1, p2])
.then(function(result) {
    console.log(result)
    return Promise.all([
        Project.create(data.projects),
        Skill.create(data.skills)
    ])
})
.then(process.exit)