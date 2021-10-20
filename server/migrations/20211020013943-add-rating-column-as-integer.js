'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Journals', 'rating', {
      type: Sequelize.INTEGER,
      allowNull: true
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Journals', 'rating')
  }
};
