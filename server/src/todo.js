const Model = require('../models/index');

const getTodosForUser = (userId, includeTasks = false) => {
  const options = {
    where: {userId},
    include: [Model.Task]
  }
  return Model.Todo.findAll(options);
}

module.exports = {getTodosForUser}

