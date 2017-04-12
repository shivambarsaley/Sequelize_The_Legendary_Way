'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    const sevenDaysFromNow = new Date();
    sevenDaysFromNow.setDate(sevenDaysFromNow.getDate()+ 7);
    function createUsers(){
      return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        name: 'Bruce Banner',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        id: 2,
        name: 'Steven Rogers',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      }
    ], {})
    }

    function createTodos(){
      return queryInterface.bulkInsert('Todos', [
      {
        id: 1,
        name: 'Investigate',
        isCompleted: false,
        UserId: 1,
        CategoryId: 1,
        endDate: sevenDaysFromNow,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        id: 2,
        name: 'How does this world work',
        isCompleted: false,
        UserId: 2,
        CategoryId: 2,
        endDate: sevenDaysFromNow,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      }
    ], {})
    }

    function createTasks(){

      return queryInterface.bulkInsert('Tasks', [
      {
        id: 1,
        name: 'The Hammer of Nul',
        isCompleted: true,
        TodoId: 1,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        id: 2,
        name: 'The hulk armor',
        isCompleted: false,
        TodoId: 1,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        id: 3,
        name: 'Making BannerTech',
        isCompleted: false,
        TodoId: 1,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        id: 4,
        name: 'CellPhones',
        isCompleted: false,
        TodoId: 2,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        id: 5,
        name: 'More fancy gadgets at S.H.I.E.L.D.',
        isCompleted: false,
        TodoId: 2,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
    ], {})
    }

    return createUsers().then(() => createTodos()).then(()=> createTasks())

    
  },

  down: function (queryInterface, Sequelize) {
    
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
