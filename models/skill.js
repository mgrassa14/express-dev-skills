// THIS IS SIMULATING A MODEL (WHICH represents getting your data)
// SIMULATING/NOT REALLY A MODEL
// fake data
const skills = [
    {id: 125223, skill: 'Objects', understand: true},
    {id: 127904, skill: 'Arrays', understand: true},
    {id: 139608, skill: 'Dom', understand: false},
    {id: 127604, skill: 'Flexbox', understand: false},
    {id: 126904, skill: 'Express', understand: false},
    {id: 117904, skill: 'Node', understand: true},
    {id: 122904, skill: 'Routers & Controllers', understand: false},
  ];
  // exports the following functions
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
    }
    // provide a random 6 digit id and add skill
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.understand = false;
    skills.push(skill);
    }
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  }