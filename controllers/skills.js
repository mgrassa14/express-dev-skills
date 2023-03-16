
const SkillModel = require('../models/skill')

// exports the coresponding functions into the models
module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    // optionally
    // index
}

// function to delete the skill with the corresponding id 
function deleteSkill(req, res){
	SkillModel.deleteOne(req.params.id);
	res.redirect('/skills')
}
// function to create skill
function create(req, res){
	console.log(req.body, ' <- req.body, which is the contents of the form')
	SkillModel.create(req.body)
	res.redirect('/skills')
}

function newSkill(req, res){
    res.render('skills/new') 
 }

// Require the Model
// function for show page
function show(req, res){
    console.log(req.params.id, "<- req.params.id");
    res.render('skills/show', {skill: SkillModel.getOne(req.params.id)})
}

// then render the todos/index.ejs, and inject a todos variable,
// that contains all the todos in the model file
// function for index page
function index(req, res, next) {
    res.render('skills/index', {skills: SkillModel.getAll() })
    // res.send('respond with a resource < it worked!');
  }

