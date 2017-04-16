'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    isCompleted: { type: DataTypes.BOOLEAN, defaultValue: false },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Task.belongsTo(models.Todo);
      }
    }
  });
  return Task;
};