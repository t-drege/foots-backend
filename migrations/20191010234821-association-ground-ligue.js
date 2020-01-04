module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Ground', // name of Source model
        'ligue_id', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Ligue', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'Ground', // name of Source model
        'ligue_id' // key we want to remove
    );
  }
};