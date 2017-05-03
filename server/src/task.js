'use strict';
const Model = require('../models/index');

const getTasksForTodo = (TodoId) => {

  return Model.Task.findAll({where: {TodoId}});
};

const addTask = (TodoId, TaskName) => {

  return Model.Task.create({TodoId, name:TaskName});
};

const markAsComplete = (id) => {

  return Model.Task.update({isCompleted: true}, {where:{id}});
};

const deleteTask = (id) => {

  return Model.Task.destroy({where:{id}})
};


module.exports = {getTasksForTodo, addTask,markAsComplete, deleteTask};

