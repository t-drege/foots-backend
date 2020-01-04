
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Player', // name of Source model
        'team_id', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Team', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'Player', // name of Source model
        'team_id' // key we want to remove
    );
  }
};