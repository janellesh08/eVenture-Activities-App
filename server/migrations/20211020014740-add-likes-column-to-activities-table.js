'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Activities', 'likes', {
        type: Sequelize.INTEGER,
        allowNull: true
      })
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.removeColumn('Activities', 'likes')
  }
};
