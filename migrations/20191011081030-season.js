'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('Type', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Type');
  }
};