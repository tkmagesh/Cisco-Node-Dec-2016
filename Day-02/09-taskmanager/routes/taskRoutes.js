var express = require('express');
var router = express.Router();

var taskList =[
	{id : 1, name : 'Watch a movie', isCompleted : false},
	{id : 2, name : 'Fix that bug', isCompleted : true},
	{id : 3, name : 'Skip that meeting', isCompleted : false},
]
/* GET home page. */
router.get('/', function(req, res, next) {
	var viewModel = {
		list : taskList
	};
  	res.render('tasks/index', viewModel);
});

router.get('/new', function(req, res, next){
	res.render('tasks/new');
	next();
});

router.post('/new', function(req, res, next){
	var taskname = req.body.taskname;
	var newTask = {
		id : taskList.reduce(function(result, task){
			return result > task.id ? result : task.id
		})+1,
		name : taskname,
		isCompleted : false
	};
	taskList.push(newTask);
	res.redirect('/tasks');
})
module.exports = router;
