module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "todo_dev",
    "host": "localhost",
    "dialect": "mysql",
    "seederStorage": "sequelize"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "todo_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "seederStorage": "sequelize"

  },
  "production": {
    "username": "root",
    "password": null,
    "database": "todo_prod",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "seederStorage": "sequelize"
  }
}
