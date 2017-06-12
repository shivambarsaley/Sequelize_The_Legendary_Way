'use strict';
const Model = require('../models/index');

const getTodosForUser = (UserId, includeTasks = true) => {
  const options = {
    where: {UserId},
    include: [Model.Task]
  };
  if(!includeTasks){
  	delete options.include;
  }
  return Model.Todo.findAll(options);
};

const addTodo = (UserId, CategoryId, todoName) => {

  return Model.Todo.create({UserId, CategoryId, name:todoName})
  .catch(Model.Sequelize.ValidationError, (e)=> console.log("Dude... Those fields ain't valid",e))
  .catch((e)=> {console.log('Something else wrong here',e)})
};

const markAsComplete = (id) => {

  return Model.Todo.update({isCompleted: true}, {where:{id}});
};

const deleteTodo = (id) => {

  return Model.Todo.destroy({where:{id}})
};

const getAllTodoWithIncompleteTasksOnly = (UserId) => {

  return Model.Todo.findAll({
  	where: {UserId},
  	include:[{model: Model.Task, where:{isCompleted: false}, attributes: {exclude:['isCompleted']}}],
  	//To just include Task name --> include:[{model: Model.Task, where:{isCompleted: false}}, attributes:['name']]
  	//To exclude isComplete --> include:[{model: Model.Task, where:{isCompleted: false}, attributes: {exclude:['isCompleted']}}]
  	raw:true
  });
};


module.exports = {getTodosForUser, addTodo,markAsComplete, deleteTodo,getAllTodoWithIncompleteTasksOnly};

