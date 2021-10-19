'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Journals', 'public', {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    })
   },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Journals', 'public')
  }
};
