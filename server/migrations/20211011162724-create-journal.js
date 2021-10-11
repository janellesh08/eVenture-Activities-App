'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Journals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      entry: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.TEXT
      },
      video: {
        type: Sequelize.TEXT
      },
      rating: {
        type: Sequelize.STRING
      },
      activity_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Activities', field: 'id'}
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Users', field: 'id'}
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
    await queryInterface.dropTable('Journals');
  }
};