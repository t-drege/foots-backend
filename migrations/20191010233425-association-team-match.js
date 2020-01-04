module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn(
                'Match', // name of Source model
                'first_team_id', // name of the key we're adding
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Team', // name of Target model
                        key: 'id', // key in Target model that we're referencing
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
                }
            ),
            queryInterface.addColumn(
                'Match', // name of Source model
                'second_team_id', // name of the key we're adding
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Team', // name of Target model
                        key: 'id', // key in Target model that we're referencing
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
                }
            )]
        );
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.removeColumn(
                'Match', // name of Source model
                'first_team_id' // key we want to remove
            ),
            queryInterface.removeColumn(
                'Match', // name of Source model
                'second_team_id' // key we want to remove
            )]
        );
    }
};