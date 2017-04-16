'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    name: { allowNull: false, type: DataTypes.STRING },
    isCompleted: { type: DataTypes.BOOLEAN, defaultValue: false },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Todo.belongsTo(models.User);
        Todo.hasMany(models.Task);
        Todo.belongsTo(models.Category);
      }
    }
  });
  return Todo;
};