'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      activity: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      time_of_day: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      price_range: {
        type: Sequelize.STRING
      },
      duration_range: {
        type: Sequelize.STRING
      },
      participants: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Activities');
  }
};