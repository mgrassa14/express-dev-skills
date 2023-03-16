var express = require('express');
const skillsCtrl = require('../controllers/skills')
var router = express.Router();

/* GET users listing. */
// these connect to the corresponding function within controllers/skills
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);

module.exports = router;