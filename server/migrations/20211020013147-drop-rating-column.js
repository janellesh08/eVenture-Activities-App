'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Journals', 'rating')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Journals')
  }
};
