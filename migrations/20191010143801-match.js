'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('Match', {
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
            result_first_team: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            result_second_team: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
        });

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Match');
    }
};