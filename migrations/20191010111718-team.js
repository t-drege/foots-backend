'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('Team', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            logo: {
                type: Sequelize.STRING,
                allowNull: true
            }
        });

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Team');
    }
};
