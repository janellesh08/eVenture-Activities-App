'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('MyActivities', 'activity_title', {
      type: Sequelize.STRING
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('MyActivities', 'activity_title')
  }
};
